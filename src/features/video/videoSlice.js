import { getVideo, videoLikes, videoUnlikes } from "./videoAPI";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});
export const postVideoLike = createAsyncThunk("video/postVideoLike", async ({ id, likes }) => {
    const likesVideo = await videoLikes(id, likes);
    return likesVideo
});
export const postVideoUnlike = createAsyncThunk("video/postVideoUnlike", async ({ id, unlikes }) => {
    const unlikeVideo = await videoUnlikes(id, unlikes);
    return unlikeVideo
});



const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            });


        builder
            .addCase(postVideoLike.fulfilled, (state, action) => {
                state.video.likes = action.payload.likes;
            })

            .addCase(postVideoUnlike.fulfilled, (state, action) => {
                state.video.unlikes = action.payload.unlikes;
            })

    },
});

export default videoSlice.reducer;
