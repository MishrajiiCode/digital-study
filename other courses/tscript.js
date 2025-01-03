document.addEventListener("DOMContentLoaded", () => {
    const adminPassword = "admin123"; // Admin password for downloading data
    const users = JSON.parse(localStorage.getItem("users")) || []; // Load users
    const videos = [
        {
            id: 1,
            title: "Learning JavaScript",
            description: "An introductory guide to JavaScript.",
            videoUrl: "https://www.youtube.com/watch?v=Ha3mFwG_eIw", // Example regular YouTube link
        },
        {
            id: 2,
            title: "CSS for Beginners",
            description: "Learn the basics of CSS styling.",
            videoUrl: "https://www.example.com/video.mp4",
        },
    ];

    // Function to convert YouTube link to embed link
    function getEmbedUrl(videoUrl) {
        if (videoUrl.includes("youtube.com/watch?v=")) {
            const videoId = videoUrl.split("v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (videoUrl.includes("youtu.be/")) {
            const videoId = videoUrl.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return videoUrl; // Return original URL if it's not a YouTube link
    }

    // Render Video Grid
    function renderVideoGrid(containerId, videoList) {
        const container = document.getElementById(containerId);
        if (videoList.length > 0) {
            container.innerHTML = videoList
                .map((video) => {
                    const embedUrl = getEmbedUrl(video.videoUrl);
                    const isYouTube = embedUrl.includes("youtube.com/embed");
                    return `
                        <div class="video">
                           
                            ${isYouTube 
                                ? `<iframe  src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`
                                : `<video controls ">
                                    <source src="${embedUrl}" type="video/mp4">
                                    Your browser does not support the video tag.
                                  </video>`
                            }
                             <h3>${video.title}</h3>
                            <p>${video.description}</p>
                        </div>
                    `;
                })
                .join("");
        } else {
            container.innerHTML = `<p style="color: red; font-size: 18px;">No videos found.</p>`;
        }
    }

    // Check Login Status
    function checkLoginStatus() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("homePage").style.display = "block";
            document.getElementById("logoutButton").style.display = "block";
            document.getElementById("loginButton").style.display = "none";
            document.getElementById("downloadDataButton").style.display = "block";
            renderVideoGrid("homeGrid", videos);
        } else {
            document.getElementById("loginSection").style.display = "block";
            document.getElementById("homePage").style.display = "none";
            document.getElementById("logoutButton").style.display = "none";
            document.getElementById("loginButton").style.display = "block";
            document.getElementById("downloadDataButton").style.display = "none";
        }
    }

    // Login Form Submission
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", username);
            alert("Login successful!");
            checkLoginStatus();
        } else {
            alert("Please enter valid credentials.");
        }
    });

    // Logout
    document.getElementById("logoutButton").addEventListener("click", () => {
        const confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out.");
            checkLoginStatus();
        }
    });

    // Download User Data
    document.getElementById("downloadDataButton").addEventListener("click", () => {
        const enteredPassword = prompt("Enter Admin Password:");
        if (enteredPassword === adminPassword) {
            const worksheetData = users.map((user, index) => ({
                ID: index + 1,
                Username: user.username,
                Password: user.password,
            }));
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(worksheetData);
            XLSX.utils.book_append_sheet(workbook, worksheet, "Login Data");
            XLSX.writeFile(workbook, "LoginData.xlsx");
            alert("Data downloaded successfully!");
        } else {
            alert("Incorrect password. Access denied.");
        }
    });

    // Search Videos
    document.getElementById("searchButton").addEventListener("click", () => {
        const searchQuery = document.getElementById("searchInput").value.toLowerCase();
        const searchResults = videos.filter((video) =>
            video.title.toLowerCase().includes(searchQuery) ||
            video.description.toLowerCase().includes(searchQuery)
        );

        document.getElementById("homePage").style.display = "none";
        document.getElementById("trendingPage").style.display = "none";
        document.getElementById("subscriptionsPage").style.display = "none";
        document.getElementById("libraryPage").style.display = "none";
        document.getElementById("searchResultsSection").style.display = "block";

        renderVideoGrid("searchResults", searchResults);
    });

    // Navigation
    document.getElementById("homeNav").addEventListener("click", () => {
        document.getElementById("homePage").style.display = "block";
        document.getElementById("trendingPage").style.display = "none";
        document.getElementById("subscriptionsPage").style.display = "none";
        document.getElementById("libraryPage").style.display = "none";
        document.getElementById("searchResultsSection").style.display = "none";
        renderVideoGrid("homeGrid", videos);
    });

    // Initialize
    checkLoginStatus();
});
