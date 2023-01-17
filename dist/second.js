"use strict";
// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }
// interface CreateStory {
//     createStory(): void
// }
// class Instagram implements TakePhoto { //ts only allows this if you add the keywords of the interface TakePhoto. You can add more, but not inherit less
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     )  {
//     }
// }
// class YouTube implements TakePhoto, CreateStory {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     )  { }
//     createStory(): void {
//         console.log("Story created")
//     }
// }
