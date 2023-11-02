const sub= ['AI','WEB','CG','VB']
const header_nav = document.querySelectorAll('li')
const subj_name = document.querySelector('.subject_name');
const card_title=document.querySelector('.title1');

notes_ai=['assets\/notes\/ai\/PDF\/AI-UNIT 1.pdf','assets\/notes\/ai\/PDF\/AI-UNIT 2.pdf','assets\/notes\/ai\/PDF\/AI-UNIT 3.pdf','assets\/notes\/ai\/PDF\/AI-UNIT 4.pdf','assets\/notes\/ai\/PDF\/AI-UNIT 5.pdf']

notes_vb=["assets\/notes\/vb\/vb_all_units_notes.pdf","assets\/notes\/vb\/Visual_basic_6.0.pdf"]

notes_cg=['assets\/notes\/cg\/CG UNIT 1.pdf','assets\/notes\/cg\/CG UNIT 2.pdf','assets\/notes\/cg\/CG - UNIT 3,4,5.pdf']

notes_web=['assets\/notes\/web\/PHP UNIT - 1.pdf','assets\/notes\/web\/PHP UNIT - 2.pdf','assets\/notes\/web\/PHP UNIT - 3.pdf','assets\/notes\/web\/PHP UNIT - 4.pdf','assets\/notes\/web\/PHP UNIT - 5.pdf']


const u1_bar=document.querySelector('.u1_bar')
const u2_bar=document.querySelector('.u2_bar')
const u3_bar=document.querySelector('.u3_bar')
const u4_bar=document.querySelector('.u4_bar')
const u5_bar=document.querySelector('.u5_bar')


function unit_reset()
{
    u1.innerHTML='Unit 1';
    u2.innerHTML='Unit 2';
    u3.innerHTML='Unit 3'
    u3_bar.classList.remove('none')
    u4_bar.classList.remove('none');
    u5_bar.classList.remove('none');
}


const u1=document.querySelector('.u1')
const u2=document.querySelector('.u2')
const u3=document.querySelector('.u3')
const u4=document.querySelector('.u4')
const u5=document.querySelector('.u5')


function cg()
{
    unit_reset();
    u4_bar.classList.add('none');
    u5_bar.classList.add('none');
    u3.innerHTML= 'Unit 3,4,5'
u1.setAttribute("href",notes_cg[0])
u1.setAttribute("download",notes_cg[0])

u2.setAttribute("href",notes_cg[1])
u2.setAttribute("download",notes_cg[1])

u3.setAttribute("href",notes_cg[2])
u3.setAttribute("download",notes_cg[2])

u4.setAttribute("href",notes_cg[3])
u4.setAttribute("download",notes_cg[3])

}



function web()
{
unit_reset()
    u1.setAttribute("href",notes_web[0])
u1.setAttribute("download",notes_web[0])

u2.setAttribute("href",notes_web[1])
u2.setAttribute("download",notes_web[1])

u3.setAttribute("href",notes_web[2])
u3.setAttribute("download",notes_web[2])

u4.setAttribute("href",notes_web[3])
u4.setAttribute("download",notes_web[3])

u5.setAttribute("href",notes_web[4])
u5.setAttribute("download",notes_web[4])

}



function ai(){
   unit_reset();

console.log('hello from ai');
u1.setAttribute("href",notes_ai[0])
u1.setAttribute("download",notes_ai[0])

u2.setAttribute("href",notes_ai[1])
u2.setAttribute("download",notes_ai[1])

u3.setAttribute("href",notes_ai[2])
u3.setAttribute("download",notes_ai[2])

u4.setAttribute("href",notes_ai[3])
u4.setAttribute("download",notes_ai[3])

u5.setAttribute("href",notes_ai[4])
u5.setAttribute("download",notes_ai[4])



}


function vb(){
    console.log('hello from ai');
    u1.innerHTML='All Units';
    u2.innerHTML='(VB env)';

    u1.innerHTML='All Units';
    u3_bar.classList.add('none')
    u4_bar.classList.add('none');
    u5_bar.classList.add('none');

    u1.setAttribute("href",notes_vb[0])
    u1.setAttribute("download",notes_vb[0])
    
    u2.setAttribute("href",notes_vb[1])
    u2.setAttribute("download",notes_vb[1])
    
    
    }
    
    

header_nav.forEach(nav_elements => {
   
    nav_elements.addEventListener('click',(e)=>{
        e.preventDefault()
        subj_name.innerHTML =(e.target.innerText);
        nav_elements.classList.toggle('selected');
        card_title.innerHTML=e.target.innerText
        
        if (sub.includes(e.target.innerText)){
            console.log(e.target.innerText);

        switch( e.target.innerText){
           

                case 'VB':
                    console.log('vb');
                    vb();
                break;
                case 'AI':
                console.log('ai');
                ai();
                break;
                case 'CG':
                    cg()
                console.log('cg')
                break;
                case 'WEB':
                    web()
                console.log('web')
                break;

        }
            
        }

    })

});


