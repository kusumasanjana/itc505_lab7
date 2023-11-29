function generateMadLib() {
    // Get values from input fields
    const city = document.getElementById('city').value;
    const rooms = document.getElementById('rooms').value;
    const food = document.getElementById('food').value;
    const hotel = document.getElementById('hotel').value;
    const landmark = document.getElementById('landmark').value;

    // Generate Mad Lib
    const madLib = `the ${city} which ${rooms} are full of ${food} is yummy ${hotel} in flagstaff near ${landmark}.`;

    // Open a new window and display the result
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>Mad Lib Result</title></head><body>');
    newWindow.document.write('<h1>Mad Lib Form</h1>');
    newWindow.document.write(`<p>${madLib}</p>`);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
}
