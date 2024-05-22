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

    if (Math.abs(horizontalDistance) <= horizontalOffset && Math.abs(verticalDistance) <= verticalOffset) {
        setButtonPosition(buttonBox.x + horizontalOffset / horizontalDistance * 10,
        buttonBox.y + verticalOffset / verticalDistance * 10
    )
    }
    
})

const setButtonPosition = (left, top) => {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET
    }
    
    console.log(left)
    console.log(top)
    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
}

const distanceFromCenter = (boxPosition, mousePosition, boxSize) => {
    return boxPosition - mousePosition + boxSize / 2
} //function returns the total distance of mouse from the center of the element