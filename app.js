
const spaceId = 'pgm063xnfbq2';
const previewApiKey = 'COhNgAa4PTgEOI8hN39P2HBXOTwPEa3WUGILhAQuIBE';
const deliveryApiKey = '9p6lwQKXi1Sy6_mFrixOp9K6GWksls3P5vjSTt1__80';
const deliveryEndpoint = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${deliveryApiKey}`;
const previewEndpoint = `https://preview.contentful.com/spaces/${spaceId}/entries?access_token=${previewApiKey}`;

async function fetchContent(usePreview) {
    const endpoint = usePreview ? previewEndpoint : deliveryEndpoint;

    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        displayContent(data.items);
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

function displayContent(items) {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Clear existing content

    items.forEach(item => {
        const title = item.fields.title;
        const content = item.fields.body;
        const date = item.fields.date;
        const author = item.fields.author;
        const category   =  item.fields.category;
        
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `<h1>${title}</h1><p>${content}</p><p>${date}</p><h2>${author}</h2><p>${category}</p>`;
        contentContainer.appendChild(entryDiv);
    });
}

function previewContent() {
    fetchContent(true); // Use the Content Preview API for fetching content
}

