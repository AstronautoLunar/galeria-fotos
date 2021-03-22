const columns = [
    window.document.getElementsByClassName('column')[0],
    window.document.getElementsByClassName('column')[1],
    window.document.getElementsByClassName('column')[2],
    window.document.getElementsByClassName('column')[3],
    window.document.getElementsByClassName('column')[4],
];

const columnImagens1 = [
    '<img src="/image/image1.jpg" alt="image1"> ',
    '<img src="/image/image2.jpg" alt="image2"> ',
    '<img src="/image/image3.jpg" alt="image3"> ',
    '<img src="/image/image4.jpg" alt="image4"> ',
    '<img src="/image/image5.jpg" alt="image5"> ',
    '<img src="/image/image6.jpg" alt="image6"> ',
    '<img src="/image/image7.jpg" alt="image7"> ',
];

const columnImagens2 = [
    '<img src="/image/image8.jpg" alt="image8"> ',
    '<img src="/image/image9.jpg" alt="image9"> ',
    '<img src="/image/image10.jpg" alt="image10"> ',
    '<img src="/image/image11.jpg" alt="image11"> ',
    '<img src="/image/image12.jpg" alt="image12"> ',
    '<img src="/image/image13.jpg" alt="image13"> ',
    '<img src="/image/image14.jpg" alt="image14"> ',
];

const columnImagens3 = [
    '<img src="/image/image15.jpg" alt="image15"> ',
    '<img src="/image/image16.jpg" alt="image16"> ',
    '<img src="/image/image17.jpg" alt="image17"> ',
    '<img src="/image/image18.jpg" alt="image18"> ',
    '<img src="/image/image19.jpg" alt="image19"> ',
    '<img src="/image/image20.jpg" alt="image20"> ',
    '<img src="/image/image21.jpg" alt="image21"> ',
];

const columnImagens4 = [
    '<img src="/image/image22.jpg" alt="image22"> ',
    '<img src="/image/image23.png" alt="image23"> ',
    '<img src="/image/image24.jpg" alt="image24"> ',
    '<img src="/image/image25.jpg" alt="image25"> ',
    '<img src="/image/image26.jpg" alt="image26"> ',
    '<img src="/image/image27.jpg" alt="image27"> ',
    '<img src="/image/image28.jpg" alt="image28"> ',
];

const columnImagens5 = [
    '<img src="/image/image29.jpg" alt="image29"> ',
    '<img src="/image/image30.jpg" alt="image30"> ',
    '<img src="/image/image31.jpg" alt="image31"> ',
    '<img src="/image/image32.jpg" alt="image32"> ',
    '<img src="/image/image33.jpg" alt="image33"> ',
    '<img src="/image/image34.jpg" alt="image34"> ',
    '<img src="/image/image35.jpg" alt="image35"> ',
    
];

columnImagens1.map(elemento => columns[0].innerHTML += elemento);

columnImagens2.map(elemento => columns[1].innerHTML += elemento);

columnImagens3.map(elemento => columns[2].innerHTML += elemento);

columnImagens4.map(elemento => columns[3].innerHTML += elemento);

columnImagens5.map(elemento => columns[4].innerHTML += elemento);

setTimeout(
    () => window.document.body.style.backgroundColor = 'black'
    , 1000
)