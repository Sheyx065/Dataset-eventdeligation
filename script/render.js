export const renderPhotosInGrid = (data) => {
    const photoGrids = $photoGrid.children;     
    const photoGridsArray = Array.from(photoGrids);
    let index = 0;
    let changeLimit = Math.floor(data.length / 3);
    photoGridsArray.forEach((photoGridItemContainer, index) => {
        const photoDataGroups = data.slice(index, index + changeLimit);
        const $imageFragment = document.createDocumentFragment();
        photoDataGroups.forEach(image => {
            console.log(image);
            const $a = document.createElement("a");
            $a.href =`../pages/image-preview.html?image-id=${image.id}`;
            $a.target = "_blank";
            $a.className = "image-item";
            $a.innerHTML =`
                <img src="${image.src.original}?auto=compress&cs=tinysrgb&w=400" alt="${image.alt}" />
                <div class="image-overlay">
                    <div class="button-group"></div>
                    <div class="image-account-info">
                        <div class="photographer-profile"></div>
                        ${image.photographer}
                        <a href="${image.src.original}?cs=srgb&amp;dl=pexels-alikarimibn-6284716.jpg&amp;fm=jpg">Download</a>
                    </div>
                </div>
            `;
            $imageFragment.appendChild($a); 
        });
        index += changeLimit;
        photoGridItemContainer.appendChild($imageFragment);
    });
};

export const renderPreviewImage = (data) => {
    $imagePreview.src = data.src.original;  
};
