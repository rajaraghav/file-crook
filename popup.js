let searchInput = document.getElementById("search_input");
let searchType = document.getElementById("search_type");
let searchButton = document.getElementById("search_button");

searchButton.addEventListener("click", () => {
  findFile();
});

let getSearchTypePattern = type => {
  switch (type) {
    case "Music":
      return "%20%2B(.mp3%7C.wav%7C.ac3%7C.ogg%7C.flac%7C.wma%7C.m4a)%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
    case "Video":
      return "%20%2B(.mkv%7C.mp4%7C.avi%7C.mov%7C.mpg%7C.wmv%7C.3gp)%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
    case "Images":
      return "%20%2B(.jpg%7C.png%7C.bmp%7C.gif%7C.tif%7C.tiff%7C.psd)%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
    case "Gif":
      return "%20%2B(.gif)%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
    case "Books/Docs":
      return "%20%2B(.MOBI%7C.CBZ%7C.CBR%7C.CBC%7C.CHM%7C.EPUB%7C.FB2%7C.LIT%7C.LRF%7C.ODT%7C.PDF%7C.PRC%7C.PDB%7C.PML%7C.RB%7C.RTF%7C.TCR%7C.DOC%7C.DOCX)%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
    case "Software/Games":
      return "%20%2B(.exe%7C.iso%7C.tar%7C.rar%7C.zip%7C.apk)%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
    case "Apps":
      return "%20%2B(.apk)%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
    default:
      return "%20-inurl%3A(jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml)%20intitle%3Aindex.of%20-inurl%3A(listen77%7Cmp3raid%7Cmp3toss%7Cmp3drug%7Cindex_of%7Cwallywashis)";
  }
};
let getGoogleSearchUrl = (searchString, type) => {
  let url = "http://www.google.com/search?q=";
  searchString = searchString.split(" ").join("+");
  url += searchString;
  url += getSearchTypePattern(type);
  return url;
};
let findFile = function() {
  let searchString = searchInput.value;
  let type = searchType.value;
  let url = getGoogleSearchUrl(searchString, type);
  window.open(url, "_newtab");
};
