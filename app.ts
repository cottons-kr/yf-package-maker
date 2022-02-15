const fs = require("fs")
const os = require("os")
const path  = require("path")

const contentExampleBtn: HTMLElement | any = document.querySelector("#contentExampleBtn")
const contentInput: HTMLInputElement | any = document.querySelector("#contentInput")
const saveBtn: HTMLElement | any = document.querySelector("#saveBtn")
const titleInput: HTMLInputElement | any  = document.querySelector("#titleInput")
const aboutInput: HTMLInputElement | any  = document.querySelector("#aboutInput")
const madebyInput: HTMLInputElement | any  = document.querySelector("#madebyInput")

contentExampleBtn.addEventListener("click", () => {
    contentInput.textContent = "(색깔 없을때) 유튜버이름 : www.youtube.com/c/example\n(색깔 있을때) 유튜버이름 : www.youtube.com/c/example : [234, 54, 43]"
})
let tuber: Object | any
saveBtn.addEventListener("click", () => {
    if (titleInput.value == "") {alert("제목을 적어주세요"); return 0}
    if (aboutInput.value == "") {alert("설명을 적어주세요"); return 0}
    if (madebyInput.value == "") {alert("만든사람을 적어주세요"); return 0}
    if (contentInput.value == "") {alert("유튜버를 적어주세요"); return 0}
    const savePath = path.resolve(os.homedir(), "Desktop", titleInput.value+"-package.json")
    
    const content = contentInput.value.split("\n")
    try {
        for (let temp of content) {
            const  name = temp.split(":")[0].replaceAll(" ", "")
            const url = temp.split(":")[1].replaceAll(" ", "")
            const color = JSON.parse(temp.split(":")[2].replaceAll(" ", ""))
            tuber[name] = {
                url: url,
                color: color
            }
        }
    } catch (err) {alert("내용을 확인해주세요. URL에 https://를 빼주세요."); return 0}
    const data = {
        title: titleInput.value,
        about: aboutInput.value,
        madeby: madebyInput.value,
        content: tuber
    }
    fs.writeFileSync(savePath, JSON.stringify(data), {encoding: "utf8"})
    alert("바탕화면에 저장했습니다")
})