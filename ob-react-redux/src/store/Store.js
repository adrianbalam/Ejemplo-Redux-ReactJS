import { configureStore } from "@reduxjs/toolkit";
import tasks from "./slices/tasks/sliceTasks";

export default configureStore({
    reducer:{
        tasks
    }
})