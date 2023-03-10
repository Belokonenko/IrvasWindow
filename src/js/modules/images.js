const images = () => {
    const imgPopup = document.createElement('div');
    const workStation = document.querySelector('.works');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    
    workStation.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);
    
    workStation.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            
            const path = target.parentNode.getAttribute('href');

            bigImage.setAttribute('src', path);
            bigImage.style.maxwidth = '50%';
            bigImage.style.height = 'auto';
            document.body.style.overflow = 'hidden';

        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });


};

export default images;


