const videoInput = document.getElementById("videoInput");
const processBtn = document.getElementById("processBtn");
const downloadBtn = document.getElementById("downloadBtn");

window.selectedFile = null;

videoInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;

    window.selectedFile = file;
    processBtn.disabled = false;
});

window.downloadBlob = function(data, filename) {
    const blob = data instanceof Blob
        ? data
        : new Blob([data], { type: "video/mp4" });

    const url = URL.createObjectURL(blob);

    downloadBtn.href = url;
    downloadBtn.download = filename;
    downloadBtn.hidden = false;
};
