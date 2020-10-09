let parent = document.querySelector('.works__content');
let items = parent.querySelectorAll('.works__contentItem');
let loadmoreBtn = document.querySelector('#loadmoreBtn');
maxItems = 8;
hiddenClass = 'visually-hidden';

[].forEach.call(items, function(item, idx) {
    if (idx > maxItems - 1) {
        item.classList.add(hiddenClass);
    }
});

loadmoreBtn.addEventListener('click', function() {
    [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx) {
        console.log(item);
        if (idx < maxItems - 1) {
            item.classList.remove(hiddenClass);
        };
        if (document.querySelectorAll('.' + hiddenClass).length === 0) {
            loadmoreBtn.style.display = 'none';
        };
    });
});