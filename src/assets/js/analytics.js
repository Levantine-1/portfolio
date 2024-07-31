// Adding this function to track what pages are being visited on the site.
//There are tons of bots in the access logs, so this is a way to get a more accurate picture of what pages are being visited by humans... hopefully.

document.addEventListener("DOMContentLoaded", function() {
    // Please forgive this jank, I'm not a front end guy :(
    const thisper_analytics = "https://thisper.levantine.io/analytics"
    // const thisper_analytics = "http://localhost:5000/analytics"
    function sendData() {
        const path = window.location.pathname;
        const userAgent = navigator.userAgent;

        const data = {
            request: path,
            userAgent: userAgent
        };

        fetch(thisper_analytics, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(error => {
            console.error('Error sending data:', error);
        });
    }
    sendData();


    const tracked_linkedin = document.getElementsByClassName('tracked_linkedin')[0].href;
    const tracked_github = document.getElementsByClassName('tracked_github')[0].href;
    const tracked_resume = document.getElementsByClassName('tracked_resume')[0].href;

document.addEventListener('click', function(event) {
        // Check if the clicked element has the class 'tracked_linkedin'
        if (event.target.classList.contains('tracked_linkedin')) {
            const userAgent = navigator.userAgent;
            const data = {
                request: tracked_linkedin,
                userAgent: userAgent
            };
            fetch(thisper_analytics, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).catch(error => {
                console.error('Error sending data:', error);
            });
        } else if (event.target.classList.contains('tracked_github')) {
            const userAgent = navigator.userAgent;
            const data = {
                request: tracked_github,
                userAgent: userAgent
            };
            fetch('http://localhost:5000/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).catch(error => {
                console.error('Error sending data:', error);
            });
        } else if (event.target.classList.contains('tracked_resume')) {
            const userAgent = navigator.userAgent;
            const data = {
                request: tracked_resume,
                userAgent: userAgent
            };
            fetch(thisper_analytics, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).catch(error => {
                console.error('Error sending data:', error);
            });
        }
    });
});