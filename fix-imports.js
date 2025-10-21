const fs = require('fs');
const path = require('path');

const filesToFix = [
  {
    file: 'pages/_app.js',
    replacements: [
      ["import '@/styles/globals.css'", "import '../styles/globals.css'"],
      ["import Layout from '@/components/layout/Layout'", "import Layout from '../components/layout/Layout'"]
    ]
  },
  {
    file: 'pages/index.js', 
    replacements: [
      ["import { products, categories } from '@/data/products'", "import { products, categories } from '../data/products'"]
    ]
  },
  {
    file: 'pages/products/[id].js',
    replacements: [
      ["import ProductGallery from '@/components/products/ProductGallery'", "import ProductGallery from '../../components/products/ProductGallery'"],
      ["import ProductDetails from '@/components/products/ProductDetails'", "import ProductDetails from '../../components/products/ProductDetails'"],
      ["import RelatedProducts from '@/components/products/RelatedProducts'", "import RelatedProducts from '../../components/products/RelatedProducts'"],
      ["import { products } from '@/data/products'", "import { products } from '../../data/products'"]
    ]
  },
  {
    file: 'components/products/RelatedProducts.js',
    replacements: [
      ["import { products } from '@/data/products'", "import { products } from '../../data/products'"]
    ]
  }
];

filesToFix.forEach(({ file, replacements }) => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    replacements.forEach(([from, to]) => {
      const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      content = content.replace(regex, to);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ ' + file + ' corrigé');
  } else {
    console.log('❌ ' + file + ' non trouvé');
  }
});

console.log('\n🎉 Tous les imports ont été corrigés !');