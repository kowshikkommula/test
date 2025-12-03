(function() {
            const urlParams = new URLSearchParams(window.location.search);
            
            const appData = {
                firstName: urlParams.get('firstName') || 'N/A',
                lastName: urlParams.get('lastName') || 'N/A',
                studentID: urlParams.get('studentID') || 'N/A',
                gender: urlParams.get('gender') || 'N/A',
                gpa: urlParams.get('gpa') || 'N/A',
                comments: urlParams.get('comments') || 'No comments provided'
            };

            window.addEventListener('DOMContentLoaded', function() {
                const displayElement = document.getElementById('applicationData');
                
                displayElement.innerHTML = `
                    <div class="data-item">
                        <strong>First Name:</strong> ${appData.firstName}
                    </div>
                    <div class="data-item">
                        <strong>Last Name:</strong> ${appData.lastName}
                    </div>
                    <div class="data-item">
                        <strong>Student ID:</strong> ${appData.studentID}
                    </div>
                    <div class="data-item">
                        <strong>Gender:</strong> ${appData.gender}
                    </div>
                    <div class="data-item">
                        <strong>GPA:</strong> ${appData.gpa}
                    </div>
                    <div class="data-item comment-section">
                        <strong>Comments:</strong><br>${appData.comments}
                    </div>
                `;
            });
        })();