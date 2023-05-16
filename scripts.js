document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('.section');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetSection = document.getElementById(this.dataset.section);

            for (var j = 0; j < sections.length; j++) {
                sections[j].style.display = 'none';
            }
            targetSection.style.display = 'block';

            for (var k = 0; k < links.length; k++) {
                links[k].classList.remove('active');
            }
            this.classList.add('active');
        });
    }

    // автоматично активувати перший розділ при завантаженні сторінки
    if (links.length > 0) {
        links[0].click();
    }

    var reviewForm = document.getElementById('review-form');
    var reviewAuthorInput = document.getElementById('review-author');
    var reviewContentInput = document.getElementById('review-content');
    var reviewsList = document.getElementById('reviews-list');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var newReview = document.createElement('div');
        var reviewAuthor = document.createElement('h4');
        var reviewContent = document.createElement('p');

        reviewAuthor.textContent = reviewAuthorInput.value;
        reviewContent.textContent = reviewContentInput.value;

        newReview.appendChild(reviewAuthor);
        newReview.appendChild(reviewContent);
        reviewsList.appendChild(newReview);

        reviewAuthorInput.value = '';
        reviewContentInput.value = '';
    });
});

