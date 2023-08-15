// helpers/fetchImages.js

// Assuming a fixed list of image filenames for each directory.
// Adjust the lists based on the actual filenames in your directories.
export const imageFilenames = {
    './0322- For Use': ['driver.JPEG', 'groupo.JPEG', ],
    './0628- For Use': ['刚建好的标准厂房-中国注塑厂在Saltillo.JPEG', '吹塑供应商考察.JPEG', /* ... other filenames */],
    './character': ['group1.JPEG', 'group2.JPEG', /* ... other filenames */],
  };
  
  const fetchImages = (directory) => {
    if (imageFilenames[directory]) {
      return imageFilenames[directory].map(filename => `${directory}/${filename}`);
    }
    return [];
  };
  
  export default fetchImages;
  