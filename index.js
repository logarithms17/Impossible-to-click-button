const evilButton = document.querySelector(".evil-button")
const OFFSET = 100

evilButton.addEventListener("click", () => {
    alert("Nice Try")
    window.close()
})

document.addEventListener("mousemove", (e) => {
    const x = e.pageX //location of mouse over from x axis
    const y = e.pageY  //location of mouse over from y axis
    const buttonBox = evilButton.getBoundingClientRect() // getting the coordinates or location of the element evilButton based on top left part
    const horizontalDistance = distanceFromCenter(buttonBox.x, x, buttonBox.width) // x-axis location from center of the element
    const verticalDistance = distanceFromCenter(buttonBox.y, y, buttonBox.height) // y-axis location from center of the element
    const horizontalOffset  = buttonBox.width /2 + OFFSET //distance to start evading the mouse based on x axis
    const verticalOffset = buttonBox.height / 2 + OFFSET //distance to start evading the mouse based on y axis
})

const distanceFromCenter = (boxPosition, mousePosition, boxSize) => {
    return boxPosition - mousePosition + boxSize / 2
} //function returns the total distance of mouse from the center of the element