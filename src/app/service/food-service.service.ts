import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }

  foodDescription = [
    {
      id:1,
      foodName  : 'Mandarin',
      foodAbout : 'Final scene dust milk late morning north object everything power talk came quite push popular park according',
      foodPrice : 8,
      foodImg  : '../../assets/image/product-1.png'
    },
    {
      id:2,
      foodName  : 'onion',
      foodAbout : 'hung dozen rose determine world motion brief nothing noun suddenly warm airplane please couple applied spent near treated drop told oldest through women introducedaccording',
      foodPrice : 2,
      foodImg  : '../../assets/image/product-2.png'
    },
    {
      id:1,
      foodName  : 'meat',
      foodAbout : 'roar excitement busy soon author each cap felt quarter perfectly action television mood cookies numeral failed needs enemy salt youth birthday ants laid develop',
      foodPrice : 21,
      foodImg  : '../../assets/image/product-3.png'
    },
    {
      id:1,
      foodName  : 'potato',
      foodAbout : 'triangle thick lost ability four vote lady girl pet figure gentle day porch capital detail especially loss bow donkey review sale chief classroom chartaccording',
      foodPrice : 3,
      foodImg  : '../../assets/image/product-5.png'
    },
    {
      id:1,
      foodName  : 'avokado',
      foodAbout : 'enemy had wheat aboard officer possibly independent entirely press wagon fresh tower extra pack pole blanket liquid still allow pay within figure carbon funaccording',
      foodPrice : 18,
      foodImg  : '../../assets/image/product-6.png'
    },
    {
      id:1,
      foodName  : 'cabbage',
      foodAbout : 'cotton life raw hole coffee rhyme entire fairly gravity choice completely impossible speak speed smallest private stop dust establish fish nobody want stove mapaccording',
      foodPrice : 15,
      foodImg  : '../../assets/image/product-4.png'
    },
    {
      id:1,
      foodName  : 'carrot',
      foodAbout : 'quarter get sort best entire frame zero stock dug complex realize stand shot vertical triangle our bee bar composition shut construction slept positive loudaccording',
      foodPrice : 6,
      foodImg  : '../../assets/image/product-7.png'
    },
    {
      id:1,
      foodName  : 'lemon',
      foodAbout : 'done on count up almost protection dig time blind sky paragraph rod next no push native noun wait hand column fruit gun blew date',
      foodPrice : 9,
      foodImg  : '../../assets/image/product-8.png'
    }
  ]

  customerDescription = [
    {
      customurName:'Chris Salazar',
      customerComment:'theory bit phrase office lamp remarkable throughout white grown fill electric process horse lady dirt seems felt because house directly greatest collect taste thin',
      customerImg:'../../assets/image/pic-1.png'
    },
    {
      customurName:'Lucinda Osborne',
      customerComment:'finger measure mistake swimming blow divide fly particularly may locate wet making far were shoe mighty wind my agree good chamber honor burst forgot',
      customerImg:'../../assets/image/pic-2.png'
    },
    {
      customurName:'Theodore Sparks',
      customerComment:'basic gun grandfather test raise oldest brave base crew immediately escape discover further tower or instead free exactly favorite road writer building wet stream',
      customerImg:'../../assets/image/pic-3.png'
    },
    {
      customurName:'Lola Spencer',
      customerComment:'pet herself plastic gather public living practice finish vote tent again beyond yard movie children chose related upward mix mountain gravity drove standard row',
      customerImg:'../../assets/image/pic-4.png'
    },
  ]
}
