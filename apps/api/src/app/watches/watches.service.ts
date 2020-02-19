import { Injectable } from '@nestjs/common';
import { Watch } from '@practice/api-interfaces';

@Injectable()
export class WatchesService {
  watches: Watch[] = [
    {
      id: '1',
      brand: 'Rolex',
      model: 'Submariner',
      price: 9000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
      imagelink:
        'https://cdn2.jomashop.com/media/catalog/product/r/o/rolex-oyster-perpetual-submariner-black-dial-black-cerachrom-bezel-steel-mens-watch-116610ln.jpg'
    },
    {
      id: '2',
      brand: 'Rolex',
      model: 'Datejust',
      price: 9000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
      imagelink:
        'https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/21/85/2185a8fd-1ee2-4a5f-8361-f1682575e776/4-rolex-date-just-41.png__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg'
    },
    {
      id: '3',
      brand: 'Omega',
      model: 'Speedmaster',
      price: 5000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
      imagelink:
        'https://cdn2.jomashop.com/media/catalog/product/o/m/omega-speedmaster-professional-moonwatch-mens-watch-311.30.42.30.01.005--.jpg'
    }
  ];

  getWatches(): Watch[] {
    return this.watches;
  }

  getWatch(id: string): Watch {
    return this.watches.filter(watch => watch.id === id)[0];
  }
}
