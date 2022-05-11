import { renderDogDetail } from '../render-utils.js';
import { getDog } from '../fetch-utils.js';

const dogDetail = document.getElementById('dog-section');
const params = new URLSearchParams(window.location.search);

async function renderDog() {
    const dog = await getDog(params.get('id'));
    
    const dogInfo = renderDogDetail(dog);
    
    dogDetail.append(dogInfo);
}
renderDog();
