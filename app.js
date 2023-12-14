
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
        const author = item.fields.body;
        const content = item.fields.date;
        const image = item.fields.author;
        const tag   =  item.fields.category;
        
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `<h2>${title}</h2><b>${author}</b><p>${content}</p><p>${image}</p><p>${tag}</p><p>${date}</p>`;
        contentContainer.appendChild(entryDiv);
    });
}

function previewContent() {
    fetchContent(true); // Use the Content Preview API for fetching content
}

