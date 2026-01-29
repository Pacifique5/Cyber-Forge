const prisma = require("../config/database");
const bcrypt = require("bcryptjs");

class UserController {
    static async getProfile(req, res) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: req.user.id },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    createdAt: true
                }
            });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.json(user);
        } catch (error) {
            console.error("Get profile error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateProfile(req, res) {
        try {
            const { firstName, lastName, email } = req.body;
            
            // Check if email is already taken by another user
            if (email && email !== req.user.email) {
                const existingUser = await prisma.user.findUnique({
                    where: { email }
                });
                
                if (existingUser) {
                    return res.status(400).json({ message: "Email already in use" });
                }
            }

            const updatedUser = await prisma.user.update({
                where: { id: req.user.id },
                data: {
                    firstName: firstName || req.user.firstName,
                    lastName: lastName || req.user.lastName,
                    email: email || req.user.email
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    createdAt: true
                }
            });
            
            res.json({
                message: "Profile updated successfully",
                user: updatedUser
            });
        } catch (error) {
            console.error("Update profile error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async changePassword(req, res) {
        try {
            const { currentPassword, newPassword } = req.body;

            if (!currentPassword || !newPassword) {
                return res.status(400).json({ message: "Current password and new password are required" });
            }

            // Get user with password
            const user = await prisma.user.findUnique({
                where: { id: req.user.id }
            });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Verify current password
            const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
            if (!isCurrentPasswordValid) {
                return res.status(400).json({ message: "Current password is incorrect" });
            }

            // Hash new password
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);

            // Update password
            await prisma.user.update({
                where: { id: req.user.id },
                data: { password: hashedNewPassword }
            });

            res.json({ message: "Password changed successfully" });
        } catch (error) {
            console.error("Change password error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateEmail(req, res) {
        try {
            const { newEmail, password } = req.body;

            if (!newEmail || !password) {
                return res.status(400).json({ message: "New email and password are required" });
            }

            // Get user with password
            const user = await prisma.user.findUnique({
                where: { id: req.user.id }
            });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Verify password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ message: "Password is incorrect" });
            }

            // Check if email is already taken
            const existingUser = await prisma.user.findUnique({
                where: { email: newEmail }
            });
            
            if (existingUser) {
                return res.status(400).json({ message: "Email already in use" });
            }

            // Update email
            const updatedUser = await prisma.user.update({
                where: { id: req.user.id },
                data: { email: newEmail },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    createdAt: true
                }
            });

            res.json({ 
                message: "Email updated successfully",
                user: updatedUser
            });
        } catch (error) {
            console.error("Update email error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async uploadProfileImage(req, res) {
        try {
            // For now, just return success - file upload would need multer middleware
            res.json({ 
                message: "Profile image upload functionality not yet implemented",
                note: "This would require file upload middleware like multer"
            });
        } catch (error) {
            console.error("Upload profile image error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getDashboardStats(req, res) {
        try {
            // Get user's challenge statistics
            const totalChallenges = await prisma.challenge.count();
            const userReports = await prisma.vulnerabilityReport.count({
                where: { userId: req.user.id }
            });
            const userChallenges = await prisma.vulnerabilityReport.findMany({
                where: { userId: req.user.id },
                select: { challengeId: true },
                distinct: ['challengeId']
            });

            const stats = {
                totalChallenges,
                completedChallenges: userChallenges.length,
                ongoingChallenges: Math.max(0, userChallenges.length - userReports),
                totalReports: userReports,
                rank: Math.floor(Math.random() * 100) + 1, // Mock ranking
                skillsLearned: Math.floor(userReports / 2) + 1
            };

            res.json(stats);
        } catch (error) {
            console.error("Get dashboard stats error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = UserController;