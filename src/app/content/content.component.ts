import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [NgbCarouselConfig],
})

export class ContentComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 51.755336;
  lng = -1.2449378;
  cardLeftTitle = 'Fun Facts About Oxford';
  cardLeftDetails = ['Oxford University was established in or around the 11th century, making it the second-oldest known university in the world behind the University of Bologna.', 'The town was named around AD 900, as a river crossing (or “ford”) for oxen. It was later damaged during the 1066 invasion, in which William the Conqueror took over England.'];
  details = {
    'Ashmolean Museum' : {
      'top':['Britain’s oldest public museum, Oxford’s wonderful Ashmolean Museum is surpassed only by the British Museum in London. It was established in 1683, when Elias Ashmole presented Oxford University with a collection of ‘rarities’ amassed by the well-travelled John Tradescant, gardener to Charles I. A new exhibition celebrates Ashmole’s 400th birthday by displaying original treasures including the hat worn by the judge who presided over the trial of Charles I, and a mantle belonging to ‘Chief Powhatan’, the father of Pocahontas.','You could easily spend a day exploring this magnificent neoclassical building. Each bright, spacious gallery across its four floors seems to hold some new marvel, be that a dazzling fresco from the palace of Knossos; artwork from Renaissance Italy to Japan, taking in Goya, van Gogh and JMW Turner; or, famously, the Anglo-Saxon Alfred Jewel, a glorious, golden 9th-century gem, thought to have been a sort of bookmark, that was crafted for Alfred the Great. There’s a strong connection throughout with Oxford and its heritage, and upstairs there’s a beautiful rooftop restaurant.'],
      'bottom':['Beaumont St', '01865-278000', 'Hours: 10am-5pm Tue-Sun, to 8pm last Fri of month']
    },
    'Trinity College' : {
      'top':['Founded in 1555, this small college boasts a lovely 17th-century garden quad, designed by Sir Christopher Wren. Its exquisite chapel, a masterpiece of English baroque, contains a limewood altar screen adorned with flowers and fruit carved by master craftsman Grinling Gibbons in 1694, and is looking fabulous after recent restoration work. Famous students have included Cardinal Newman, William Pitt the Elder, two other British prime ministers, and the fictional Jay Gatsby, the Great Gatsby himself.'],
      'bottom':[]
    },
    'Modern Art Oxford' : {
      'top':['Showcasing stimulating temporary exhibitions in its bright white airy galleries, and graced with a spacious cafe and a good shop, this excellent museum is well worth anyone’s time. Check out the program of upcoming talks and workshops; there’s always something interesting going on.'],
      'bottom':['30 Pembroke St', '01865-722733', 'Hours: 10am-5pm Tue-Sat, noon-5pm Sun']
    },
    'Bodleian Library' : {
      'top':['At least five kings, dozens of prime ministers and Nobel laureates, and luminaries such as Oscar Wilde, CS Lewis and JRR Tolkien have studied in Oxford`s Bodleian Library, a magnificent survivor from the Middle Ages. Wander into its central 17th-century quad, and you can admire its ancient buildings for free. Both Blackwell Hall and the exhibition rooms in the Weston Library can be visited free of charge, while tours give you access to more of the complex.'],
      'bottom':[]
    },
    'Radcliffe Camera' : {
      'top':['Surely Oxford’s most photographed landmark, the sandy-gold Radcliffe Camera is a beautiful, light-filled, circular, columned library. Built between 1737 and 1749 in grand Palladian style, as ‘Radcliffe Library’, it’s topped by Britain’s third-largest dome. It`s only been a ‘camera’, which simply means ‘room’, since 1860, when it lost its independence and became what it remains, a reading room of the Bodleian Library. The only way for nonmembers to see the interior is on an extended 1½-hour tour of the Bodleian.'],
      'bottom':[]
    },
    'Pitt Rivers Museum' : {
      'top':['If exploring an enormous room full of eccentric and unexpected artefacts sounds like your idea of the perfect afternoon, welcome to the amulets-to-zithers extravaganza that is the Pitt Rivers museum. Tucked behind Oxford’s natural-history museum, and dimly lit to protect its myriad treasures, it’s centred on an anthropological collection amassed by a Victorian general, and revels in exploring how differing cultures have tackled topics like ‘Smoking and Stimulants’ and ‘Treatment of Dead Enemies’.','Wandering its three balconied floors, you may come across anything from Mesopotamian temple receipts to Japanese Noh-theatre masks or a warrior’s helmet made from the skin of a porcupine fish. There’s even an entire case of lamellaphones (wait and see!)'],
      'bottom':['South Parks Rd','01865-270927','Hours: 10am-4.30pm, from noon Mon']
    },
    'Port Meadow' : {
      'top':['no data'],
      'bottom':[]
    },
    'Oxford University Museum of Natural History' : {
      'top':['Housed in a glorious Victorian Gothic building, with cast-iron columns, flower-carved capitals and a soaring glass roof, this museum makes a superb showcase for some extraordinary exhibits. Specimens from all over the world include a 150-year-old Japanese spider crab, but it’s the dinosaurs that really wow the crowds. As well as a towering T-rex skeleton – ‘Stan’, the second most complete ever found – you’ll see pieces of Megalosaurus, which was in 1677 the first dinosaur ever mentioned in a written text.','A particular local favourite is the (stuffed) dodo that was immortalised by Lewis Carroll in Alice in Wonderland. The unfortunate bird was stunningly revealed in 2018 to have been shot in the head, rather than dying peacefully in captivity, as previously thought.'],
      'bottom':['Parks Rd','01865-272950','Hours: 10am-5pm']
    }

  };
  bottomDetails = '';
  

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.pauseOnHover = false;
    config.wrap = true;
    config.keyboard = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
  ngOnInit() {
    this.initializeMap()
  }
  private initializeMap() {
    this.buildMap()
  }
  buildMap() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 11.15,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.scrollZoom.disable();
  }
  onClickMe(x, y, e: any) {
    this.map.flyTo({
      center: [x, y],
      zoom: 17,
      essential: true
    });
    new mapboxgl.Popup()
      .setHTML('<div style="max-width:20vw; height:auto"><img class="card-img-top" src="/assets/images/' + e.target.textContent + '.jpg" alt="Card image cap"><p style="text-align:center">' + e.target.textContent + '</p></div>')
      .setLngLat([x, y])
      .addTo(this.map);
    this.cardLeftTitle = e.target.textContent;
    this.cardLeftDetails = this.details[e.target.textContent].top
    this.bottomDetails = this.details[e.target.textContent].bottom
  }
}

