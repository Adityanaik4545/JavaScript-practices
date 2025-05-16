import fs from "fs/promises"
import fsn from "fs"
import path from "path"
// accessed cluttered folder
let mainPath = "C:\\Users\\naikA\\OneDrive\\Desktop\\Practices folder\\practies_folder\\javascript-practices\\clutter";
let cluttered_folder = await fs.readdir(mainPath);
// now to access each file in folder used for of loop for each item
for (const items of cluttered_folder) {
    //used split to divide filename,extension
    let extension = items.split(".")[1]
    // before adding file or creating new folder , i will make sure that my js file and json file should not get added in folder and make sure that only file with extension should get added in folder
    if (extension != "js" && extension != "json" && items.split(".").length > 1) {
// checks if folder exist, if exist it will added files in foler according to their extenstion
        if (fsn.existsSync(path.join(mainPath, extension))) {
            await fs.rename(path.join(mainPath, items), path.join(mainPath, extension, items))
        }
        // creates new folder and adds files respective to their folders
        else {
            await fs.mkdir(extension)
            await fs.rename(path.join(mainPath, items), path.join(mainPath, extension, items))

        }
    }

}
