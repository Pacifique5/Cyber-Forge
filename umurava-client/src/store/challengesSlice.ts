import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { challengeService } from "@/services/challengeService";
import { Challenge } from "@/types/challenge"; // Import from types file

// Define Filters type
interface ChallengeFilters {
    search?: string;
}

// Define Redux state structure
interface ChallengeState {
    challenges: Challenge[];
    selectedChallenge: Challenge | null;
    filters: ChallengeFilters;
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: ChallengeState = {
    challenges: [],
    selectedChallenge: null,
    filters: { search: "" },
    loading: false,
    error: null,
};

// Async Thunk: Fetch challenges from API
export const fetchChallenges = createAsyncThunk<Challenge[]>(
    "challenges/fetchChallenges",
    async () => {
        return await challengeService.getAllChallenges();
    }
);

// Async Thunk: Fetch details of a specific challenge
export const fetchChallengeDetails = createAsyncThunk<Challenge, string>(
    "challenges/fetchChallengeDetails",
    async (id) => {
        return await challengeService.getChallengeById(id);
    }
);

// Async Thunk: Create a new challenge
export const createChallengeAsync = createAsyncThunk<Challenge, Omit<Challenge, 'id' | 'createdAt'>>(
    "challenges/createChallenge",
    async (challengeData) => {
        return await challengeService.createChallenge(challengeData);
    }
);

// Create Slice
const challengesSlice = createSlice({
    name: "challenges",
    initialState,
    reducers: {
        // Set challenge filters
        setChallengeFilters: (state, action: PayloadAction<ChallengeFilters>) => {
            state.filters = action.payload;
        },

        // Create a new challenge (local state update)
        createChallenge: (state, action: PayloadAction<Challenge>) => {
            state.challenges.push(action.payload);
        },

        // Update an existing challenge
        updateChallenge: (state, action: PayloadAction<Challenge>) => {
            const index = state.challenges.findIndex(challenge => challenge.id === action.payload.id);
            if (index !== -1) {
                state.challenges[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch challenges
            .addCase(fetchChallenges.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallenges.fulfilled, (state, action) => {
                state.loading = false;
                state.challenges = action.payload;
            })
            .addCase(fetchChallenges.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch challenges";
            })
            // Fetch challenge details
            .addCase(fetchChallengeDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallengeDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedChallenge = action.payload;
            })
            .addCase(fetchChallengeDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch challenge details";
            })
            // Create challenge
            .addCase(createChallengeAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createChallengeAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.challenges.push(action.payload);
            })
            .addCase(createChallengeAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to create challenge";
            });
    },
});

// Export actions & reducer
export const { setChallengeFilters, createChallenge, updateChallenge } = challengesSlice.actions;
export default challengesSlice.reducer;
