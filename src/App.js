import React from 'react';
import Logo from "./assets/IBS logo 1.png"
import { Button, Card ,Input} from 'antd';
import image from "./assets/728ba935-2609-40e4-acad-e8f84592ae51.webp.png"
import Picture from "./assets/Picture ⏵ 2fe4ce6c7d2ee230858dc1de2e66ea4959ce31a6.webp.png"
import Item from "./assets/Item.png"
import { CheckCircleFilled ,PlayCircleFilled } from '@ant-design/icons';
import Desktop from "./assets/desktop.png.png"
import Linear from "./assets/div.work-v4__animation.png"
import User1 from "./assets/Picture ⏵ c327a71b570e945f4b1c2ec8aca6c559bc81b0d6.webp.png"
import astrum1 from "./assets/div.profile-card (2).png"
import astrum2 from "./assets/div.profile-card (1).png"
import astrum3 from "./assets/sarvarbek.png"
import astrum4 from "./assets/div.profile-card.png"
import file from "./assets/Picture ⏵ 3cbc29413e244e56f03f6badd073ca67bcdecb0f.webp.png"
import H from "./assets/div.ui-text-review-header__avatar-wrapper.png"
import Picture1 from "./assets/1.png"
import Picture2 from "./assets/2.png"
import Picture3 from "./assets/3.png"
import Picture4 from "./assets/4.png"
import Crad from "./assets/card.png"
import Picture5 from "./assets/5 (2).png"
import Picture6 from "./assets/6 (2).png"
import Picture7 from "./assets/7.png"
import Kespa from "./assets/Picture ⏵ kespa.webp.png"
import {Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Cascader, Select, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;const App = () => {
  return (
    <div>
     <div className='container-fluid align-items-center'>
     <nav className='nav '>
          <div className="logo ">
              <img style={{width:"100px",height:"60px",marginTop:"-20px"}} src={Logo}/>
          </div>
          <div className="link d-flex px-4">
             <div>
                          <a  style={{textDecoration:"none",color:"black",fontSize:"13px"}} href="#">O IBS</a>
              <a className='px-5' style={{textDecoration:"none",color:"black",fontSize:"13px"}} href="#">Помочь с выбором</a>
             </div>
              <Button style={{border:"1px solid blue",color:"blue",marginTop:"-3px",borderRadius:"20px"}}>Все курсы</Button>
              <p className='py-1' style={{fontSize:"13px"}}>Ru</p>
              <p className='py-1' style={{fontSize:"13px"}}>Uz</p>
          </div>
      </nav>
     </div>
     <div className="container page1" style={{background: "#E3F1FF",borderRadius:"15px"}}>
            <nav className='nav'>
              <div className="text p-4">ПЕРВЫЙ ПЛАТЕЖ НА 2-ОЙ МЕСЯЦ</div>
              <div className='div'> 
              <h2 className='text-secondary' style={{fontWeight:"700"}}> % </h2> 
              <div style={{fontSize:"12px"}}>Летняя распродажа
                <p>Скидки до 60% действуют </p>
              </div>
              </div>
            </nav>
            <div className='container page2'>
              <div className='professions py-4'>
                <h1>Профессия <br />Разработчик</h1>
                <p className='py-3 text-secondary'>Курс для тех, кто мечтает о работе в IT, но не знает, с чего начать,или переживает, что ничего не получится. Мы поможем вам преодолеть все страхи и пройти весь путь к новой профессии:от выбора IT-направления до трудоустройства.</p>
                <button style={{height:"40px"}} className='btn btn-primary py-1 px-4'>Записаться на курс</button>
              </div>
              <div className='imagepage'>
                   <img className='image1' src={image}/>
              </div>
            </div>
     </div>
     <div className="container page3 px-5 py-4">
      <div>
        <li>Для новичков</li>
        <p>всё получится без знаний 
          математики и опыта в IT</p>
      </div>
      <div>
        <li>Для новичков</li>
        <p>всё получится без знаний
          математики и опыта в IT</p>
      </div>
      <div>
        <li>Для новичков</li>
        <p>всё получится без знаний
        математики и опыта в IT</p>
      </div>
      <div>
        <li>Для новичков</li>
        <p>всё получится без знаний математики и опыта в IT</p>
      </div>
     </div>
     <div className="container py-5">
      <hr  style={{border:"2px solid black"}}/>
      <div className='flexdiv' style={{gap:"50px"}}>
        <h2 className='width50'>Неважно, какой у вас <br />уровень. Главное — начать</h2>
        <p className='width50'>Цель этого курса — помочь вам сдвинуться с «мёртвой» точки
      и сделать первый шаг к востребованной IT-профессии.
      Вы получите готовый план развития в IT, а мы поможем вам
      ройти этот путь до конца. Попробуете себя в 4 направлениях,
      определите, в чём сильны, и выберете профессию на основе
      своих способностей. А если почувствуете, что ошиблись, —
      сможете поменять курс.</p>
      </div>
      <hr  style={{border:"2px solid black"}}/>
     </div>
     <div className="container">
      <h1>О профессии</h1>
      <h5 className='py-4 text-secondary'>Лучшее время для карьеры в IT</h5>
      <h4>17 708 000 сум</h4>
      <p>зарплата начинающего специалиста</p>
     </div>
    <div className='pink'>
    <div className="container page4" style={{background: "#F7F7F5",borderRadius:"10px"}}>
          <div className='image4'>
              <img src={Picture}/>
          </div>
          <div className='kurs py-3'>
              <h2 className='py-3'>Этот курс для вас, если:</h2>
              <p>Вы хотите с нуля освоить востребованную IT-профессию, но не готовы
                тратить годы на обучение.
                Вы не знаете, какое направление выбрать, и волнуетесь, что ошибётесь
                с курсом.
                Вы не до конца уверены в своих силах и сомневаетесь, что сможете
                попасть в IT без опыта.
                Вам не хватает мотивации, чтобы начать.</p>
<div className='py-3'>
<button style={{height:"40px"}} className='btn btn-secondary py-1 px-4'>Записаться на курс</button>
</div>
          </div>
     </div>
    </div>
     <div className="container page6">
      <h2 className='width100 py-4'>А что мешает вам войти в IT?</h2>
      <div className={'flexwrap'}>
      <div className="image5">
          <img style={{width:"100%"}} src={Item} alt="" />
      </div>
      <div className='image5'>
        <h4>«Я ничего не понимаю в IT, это не про меня»</h4>
        <p>Курс начинается с самых основ. Спикер чётко, просто
и понятно расскажет, какие направления есть в IT и кто чем
занимается в сфере. Вы на примерах разберётесь, как
устроены и работают программы.
После вводного блока вы уже не будете смотреть на код
как на набор символов и поймёте, какой карьерный путь
в IT вас больше привлекает.</p>
      </div>
      </div>
     </div>
     <div className="container py-5">
      <h2>На курсе вы</h2>   
      <div className="cards">
      <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>      <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>      <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>      <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>      <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>    
       <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>    
       <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>    
       <Card style={{border:"none"}} className='py-4 checking'>
       <CheckCircleFilled/> <br />
        <p className="text-secondary">Поймёте, что вам по силам научиться <br />
программировать</p>
       </Card>       
      </div>
        </div>
        <div className="container py-3">
         <nav className="nav">
         <h2>Как проходит обучение на <br />
платформе</h2>
<button style={{height:"40px"}} className='btn bg-secondary py-1 px-4'> <PlayCircleFilled/> Записаться на курс</button>
         </nav>
         <div className="container page6 py-5">
      <div className={'flexdiv'}>
      <div className="image6">
          <img style={{width:"100%",borderRadius:"10px"}} src={Desktop} alt="" />
      </div>
      <div className='image7'>
        <h4>«Я ничего не понимаю в IT, это не про меня»</h4>
        <p>Курс начинается с самых основ. Спикер чётко, просто
и понятно расскажет, какие направления есть в IT и кто чем
занимается в сфере. Вы на примерах разберётесь, как
устроены и работают программы.
После вводного блока вы уже не будете смотреть на код
как на набор символов и поймёте, какой карьерный путь
в IT вас больше привлекает.</p>
      </div>
      </div>
     </div>
        </div>
        <div className="container-fluid1">
        <div className='container page2 py-5'>
              <div className='professions py-4 text-white'>
                <h1>Поможем найти <br />
работу или вернем <br />
деньги</h1>
                <p className='py-3 text-secondary'>Курс для тех, кто мечтает о работе в IT, но не знает, с чего начать,или переживает, что ничего не получится. Мы поможем вам преодолеть все страхи и пройти весь путь к новой профессии:от выбора IT-направления до трудоустройства.</p>
                <button style={{height:"40px"}} className='btn btn-primary py-1 px-4'>Записаться на курс</button>
              </div>
              <div className='imagepage'>
                   <img className='image1' src={Linear}/>
              </div>
            </div>
            <div className="container ">
         <h2 className='text-white'>Чем вам поможет Наш партнер Центр развития карьеры:</h2>
         <Swiper style={{width:"100%"}}  slides-per-view={3}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                spaceBetween={10}
                modules={[Pagination]}
                className="mySwiper py-3">
             <SwiperSlide>
                 <Card className='card' style={{background:"#FFDF6E",borderRadius:"10px"}}>
                     <button style={{width:"20px",height:"20px",borderRadius:"50%",background:"black",border:"none"}}></button>
                     <h5 className={'py-3'}>Резюме</h5>
                     <p>Презентуем вас работодателям с
                         выгодной стороны</p>
                 </Card>
             </SwiperSlide>
             <SwiperSlide>
                 <Card className='card' style={{background:"#DCF4FE",borderRadius:"10px"}}>
                     <button style={{width:"20px",height:"20px",borderRadius:"50%",background:"black",border:"none"}}></button>
                     <h5 className={'py-3'}>Резюме</h5>
                     <p>Презентуем вас работодателям с
                         выгодной стороны</p>
                 </Card>
             </SwiperSlide>    <SwiperSlide>
             <Card className='card' style={{background:"#ADDCB2",borderRadius:"10px"}}>
                 <button style={{width:"20px",height:"20px",borderRadius:"50%",background:"black",border:"none"}}></button>
                 <h5 className={'py-3'}>Резюме</h5>
                 <p>Презентуем вас работодателям с
                     выгодной стороны</p>
             </Card>
         </SwiperSlide>    <SwiperSlide>
             <Card className='card' style={{background:"#FEBCB4",borderRadius:"10px"}}>
                 <button style={{width:"20px",height:"20px",borderRadius:"50%",background:"black",border:"none"}}></button>
                 <h5 className={'py-3'}>Резюме</h5>
                 <p>Презентуем вас работодателям с
                     выгодной стороны</p>
             </Card>
         </SwiperSlide>    <SwiperSlide>
             <Card className='card' style={{background:"#FFDF6E",borderRadius:"10px"}}>
                 <button style={{width:"20px",height:"20px",borderRadius:"50%",background:"black",border:"none"}}></button>
                 <h5 className={'py-3'}>Резюме</h5>
                 <p>Презентуем вас работодателям с
                     выгодной стороны</p>
             </Card>
         </SwiperSlide>    <SwiperSlide>
             <Card className='card' style={{background:"#DCF4FE",borderRadius:"10px"}}>
                 <button style={{width:"20px",height:"20px",borderRadius:"50%",background:"black",border:"none"}}></button>
                 <h5 className={'py-3'}>Резюме</h5>
                 <p>Презентуем вас работодателям с
                     выгодной стороны</p>
             </Card>
         </SwiperSlide>
         </Swiper>
        </div>
        <div className="container py-5 page8">
          <div className="white py-3">
                   <h2>9000⁠+</h2>
                   <p className='py-3'>пользователей Skillbox достигли <br />
карьерных изменений</p>
<h5>500⁠+</h5>
<p>пользователей меняют карьеру <br />
ежеквартально</p>
<h5>600⁠+</h5>
  <p>новых вакансий ежеквартально размещают <br />
работодатели на нашей площадке</p>
          </div>
          <div className="black py-3">
            <h2>Почему мы уверены в 
вашем трудоустройстве?</h2>
<p style={{marginTop:"40px"}}>Определяем потребности рынка
Мы тщательно анализируем профессии, в которых помогаем
с трудоустройством: опрашиваем специалистов, оцениваем вакансии,
потребность в кандидатах и доступность профессии для новичков.
Даём качественные знания
Помогаем получить навыки, которые необходимы здесь и сейчас. Все
спикеры — практикующие специалисты, а их знания востребованы на рынке.
Поддерживаем на старте карьеры
Наши консультанты контролируют каждый шаг на пути к вашей карьере. Они
помогают избежать ошибок и спланировать профессиональный путь.</p>
          </div>
        </div>
        <div className="container p-5" style={{background: "#141414",borderRadius:"15px"}}>
            <h2 className='py-3 text-white'>Люди, которые изменили <br />
жизнь благодаря Skillbox</h2>
<p className='text-white'>Пользователи Skillbox осваивают новые профессии.  <br />
Строят карьеру, меняют жизнь и обретают себя. У вас <br />
тоже получится.</p>
<br /><br />
<button style={{height:"40px"}} className='btn border-secondary text-secondary py-1 px-4'>Записаться на курс</button>
        </div>
       <div className="container text-white py-5">
       <h4>Отзывы работодателей</h4>
           <Swiper style={{width:"100%"}}  slides-per-view={3}
                   breakpoints={{
                       640: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                       },
                       768: {
                           slidesPerView: 2,
                           spaceBetween: 40,
                       },
                       1024: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                       },
                   }}
                   spaceBetween={10}
                   modules={[Pagination]}
                   className="mySwiper py-3">
               <SwiperSlide>
                   <Card className='card ' style={{background:"#333333",borderRadius:"10px"}}>
                      <div className={'text-white'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                              <img  src={User1}/>
                              <div style={{marginTop:"13px"}}>
                                  <h6>Юлия Ильяева</h6>
                                  <p style={{fontSize:"13px"}}>Директор по развитию Team for Dream</p>
                              </div>
                      </div>
                       <p className={'py-2 text-white'}>Кандидаты из Skillbox всегда отличаются своей
                           высокой мотивацией, поэтому мы с радостью
                           приглашаем их на стажировки и предлагаем
                           работу. Уже несколько раз мы принимали
                           на junior-позиции участников курса «Профессия
                           Event-менеджер».</p>
                   </Card>
               </SwiperSlide>
               <SwiperSlide>
                   <Card className='card ' style={{background:"#333333",borderRadius:"10px"}}>
                       <div className={'text-white'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                           <img  src={User1}/>
                           <div style={{marginTop:"13px"}}>
                               <h6>Юлия Ильяева</h6>
                               <p style={{fontSize:"13px"}}>Директор по развитию Team for Dream</p>
                           </div>
                       </div>
                       <p className={'py-2 text-white'}>Кандидаты из Skillbox всегда отличаются своей
                           высокой мотивацией, поэтому мы с радостью
                           приглашаем их на стажировки и предлагаем
                           работу. Уже несколько раз мы принимали
                           на junior-позиции участников курса «Профессия
                           Event-менеджер».</p>
                   </Card>
               </SwiperSlide>
               <SwiperSlide>
                   <Card className='card ' style={{background:"#333333",borderRadius:"10px"}}>
                       <div className={'text-white'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                           <img  src={User1}/>
                           <div style={{marginTop:"13px"}}>
                               <h6>Юлия Ильяева</h6>
                               <p style={{fontSize:"13px"}}>Директор по развитию Team for Dream</p>
                           </div>
                       </div>
                       <p className={'py-2 text-white'}>Кандидаты из Skillbox всегда отличаются своей
                           высокой мотивацией, поэтому мы с радостью
                           приглашаем их на стажировки и предлагаем
                           работу. Уже несколько раз мы принимали
                           на junior-позиции участников курса «Профессия
                           Event-менеджер».</p>
                   </Card>
               </SwiperSlide>  <SwiperSlide>
               <Card className='card ' style={{background:"#333333",borderRadius:"10px"}}>
                   <div className={'text-white'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                       <img  src={User1}/>
                       <div style={{marginTop:"13px"}}>
                           <h6>Юлия Ильяева</h6>
                           <p style={{fontSize:"13px"}}>Директор по развитию Team for Dream</p>
                       </div>
                   </div>
                   <p className={'py-2 text-white'}>Кандидаты из Skillbox всегда отличаются своей
                       высокой мотивацией, поэтому мы с радостью
                       приглашаем их на стажировки и предлагаем
                       работу. Уже несколько раз мы принимали
                       на junior-позиции участников курса «Профессия
                       Event-менеджер».</p>
               </Card>
           </SwiperSlide>
           </Swiper>
       </div>
        </div>
       <div className={'container py-5'}>
           <h1>О IBS</h1>
           <p className={'py-4'}>
               Skillbox
               №1
               в странах СНГ. На платформе вы сможете получить актуальные знания и освоить
               востребованную профессию из любой точки мира.
           </p>
           <div className={'images'}>
               <img className={"astrum"} src={astrum1}/>
               <img className={"astrum"} src={astrum2}/>
               <img className={"astrum"} src={astrum3}/>
               <img className={"astrum"} src={astrum4}/>
           </div>
       </div>
        <div className="container page4" style={{background: "#F7F7F5",borderRadius:"10px",gap:"30px"}}>
            <div className='image8'>
                <img src={file}/>
            </div>
            <div className='kurs1 p-3'>
                <h2 className='py-3'>В стоимость курса входит:</h2>
                <li>Бесконечный доступ к обновлениям курса — ваши знания никогда не устареют.</li>
                <li>Тест на профориентацию для самоопределения в IT.</li>
                <li>Возможность выбрать и освоить одну из 4 востребованных IT-профессий.</li>
                <li>Право поменять направление в начале обучения.</li>
                <li>Поддержка от кураторов.</li>
                <li>Практика на реальных проектах и групповые стажировки.</li>
                <li>Помощь в трудоустройстве от Центра карьеры.</li>
                <div className='py-3'>
                    <button style={{height:"40px"}} className='btn btn-primary py-1 px-4'>Записаться на курс</button>
                </div>
            </div>
        </div>
        <div className={'container py-5'}>
            <div className={'container w-100 px-5'} style={{borderRadius:"15px", border:"1px solid black"}}>
                <nav className='d-flex py-4 navbar'>
                     <h1>  Содержание <br />
курсов</h1>
<p>Вас ждут теоретические видео, практические работы <br />
и итоговые проекты на основе реальных кейсов.</p>
                </nav>
             <div className='py-5'>
             <h4 className='py-2'>Погружение в IT</h4>
                <p className='py-2'>Вы узнаете, какие есть языки программирования и профессии в сфере IT, <br />
подробно разберёте каждую строчку кода и на реальных примерах <br />
убедитесь, что стать успешными программистами могут не только <br />
математики или выпускники технических вузов.</p>
<hr />
<p>Первый шаг к программированию</p>
<hr />
<p>Первый шаг к программированию</p><hr />
<p>Первый шаг к программированию</p>
<h4 className='py-3'>Погружение в IT</h4>
                <p>Вы узнаете, какие есть языки программирования и профессии в сфере IT, <br />
подробно разберёте каждую строчку кода и на реальных примерах <br />
убедитесь, что стать успешными программистами могут не только <br />
математики или выпускники технических вузов.</p>
<hr />
<p>Первый шаг к программированию</p>
<hr />
<p>Первый шаг к программированию</p><hr />
<p>Первый шаг к программированию</p>
             </div>
            </div>
        </div>
        <div className={'container-fluid py-5'} style={{background:"#E3F1FF"}}>
            <div className="container bg-white blueFlex" style={{borderRadius:"15px",height:"auto"}}>
                <div className={'blueFlex'}>
                    <div className="px-3 image0">
                        <h2>Получить презентацию <br/>
                            курса и консультацию <br/>
                            специалиста</h2>
                    </div>
                    <div className='image5  py-4' style={{height:"auto"}}>
                        <Input placeholder={'Email'} style={{height:"40px"}}/>
                        <Input  style={{height:"0px",width:"48%",marginTop:"20px"}}
                                addonBefore={
                                <Cascader
                                    style={{
                                        width: 50,
                                    }}
                                />
                            }
                            defaultValue="Телефон"
                        />
                        <Input style={{height:"40px",width:"50%",marginTop:"20px",marginLeft:"5px"}} placeholder={'Электронная почта'}/>
                  <button style={{marginTop:"30px"}} className={'btn btn-primary w-45 px-5 py-2'}>Отправить</button> <br/>
                   <input style={{marginTop:"25px"}} type={'checkbox'}/> Отправляя заявку, вы даёте согласие на обработку своих персональных
                        данных в соответствии с политикой конфиденциальности.
                    </div>
                </div>
            </div>
        </div>
        <div className={'container py-5'}>
            <h2>Отзывы участников</h2>
            <Swiper style={{width:"100%"}}  slides-per-view={3}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                    }}
                    spaceBetween={10}
                    modules={[Pagination]}
                    className="mySwiper py-3">
                <SwiperSlide>
                    <Card className='card1 ' style={{borderRadius:"10px"}}>
                        <div className={'text-dark'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                            <img  src={H}/>
                            <div style={{marginTop:"13px"}}>
                                <h6>Никита Пак</h6>
                                <p style={{fontSize:"13px"}}>Курс «Профессия Python-разработчик»</p>
                            </div>
                        </div>
                        <p className={'py-2 text-dark'}>Нравится постоянная обратная связь от платформы и куратора. Большое количество
                            практических работ, позволяющих моментально применить полученные знания. Изобилие
                            бонусных курсов, дающих возможность самостоятельно развиваться не только по программе,
                            выбранной для изучения, но и в других аспектах.
                            Процесс проверки практических заданий порой занимает время, однако это не минус: пока
                            ждёшь, можно закрепить пройденный материал и запомнить важные формулировки и понятия.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='card1 ' style={{borderRadius:"10px"}}>
                        <div className={'text-dark'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                            <img  src={H}/>
                            <div style={{marginTop:"13px"}}>
                                <h6>Никита Пак</h6>
                                <p style={{fontSize:"13px"}}>Курс «Профессия Python-разработчик»</p>
                            </div>
                        </div>
                        <p className={'py-2 text-dark'}>Нравится постоянная обратная связь от платформы и куратора. Большое количество
                            практических работ, позволяющих моментально применить полученные знания. Изобилие
                            бонусных курсов, дающих возможность самостоятельно развиваться не только по программе,
                            выбранной для изучения, но и в других аспектах.
                            Процесс проверки практических заданий порой занимает время, однако это не минус: пока
                            ждёшь, можно закрепить пройденный материал и запомнить важные формулировки и понятия.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='card1 ' style={{borderRadius:"10px"}}>
                        <div className={'text-dark'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                            <img  src={H}/>
                            <div style={{marginTop:"13px"}}>
                                <h6>Никита Пак</h6>
                                <p style={{fontSize:"13px"}}>Курс «Профессия Python-разработчик»</p>
                            </div>
                        </div>
                        <p className={'py-2 text-dark'}>Нравится постоянная обратная связь от платформы и куратора. Большое количество
                            практических работ, позволяющих моментально применить полученные знания. Изобилие
                            бонусных курсов, дающих возможность самостоятельно развиваться не только по программе,
                            выбранной для изучения, но и в других аспектах.
                            Процесс проверки практических заданий порой занимает время, однако это не минус: пока
                            ждёшь, можно закрепить пройденный материал и запомнить важные формулировки и понятия.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                <Card className='card1 ' style={{borderRadius:"10px"}}>
                    <div className={'text-dark'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <img  src={H}/>
                        <div style={{marginTop:"13px"}}>
                            <h6>Никита Пак</h6>
                            <p style={{fontSize:"13px"}}>Курс «Профессия Python-разработчик»</p>
                        </div>
                    </div>
                    <p className={'py-2 text-dark'}>Нравится постоянная обратная связь от платформы и куратора. Большое количество
                        практических работ, позволяющих моментально применить полученные знания. Изобилие
                        бонусных курсов, дающих возможность самостоятельно развиваться не только по программе,
                        выбранной для изучения, но и в других аспектах.
                        Процесс проверки практических заданий порой занимает время, однако это не минус: пока
                        ждёшь, можно закрепить пройденный материал и запомнить важные формулировки и понятия.</p>
                </Card>
            </SwiperSlide>
                <SwiperSlide>
                <Card className='card1 ' style={{borderRadius:"10px"}}>
                    <div className={'text-dark'} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <img  src={H}/>
                        <div style={{marginTop:"13px"}}>
                            <h6>Никита Пак</h6>
                            <p style={{fontSize:"13px"}}>Курс «Профессия Python-разработчик»</p>
                        </div>
                    </div>
                    <p className={'py-2 text-dark'}>Нравится постоянная обратная связь от платформы и куратора. Большое количество
                        практических работ, позволяющих моментально применить полученные знания. Изобилие
                        бонусных курсов, дающих возможность самостоятельно развиваться не только по программе,
                        выбранной для изучения, но и в других аспектах.
                        Процесс проверки практических заданий порой занимает время, однако это не минус: пока
                        ждёшь, можно закрепить пройденный материал и запомнить важные формулировки и понятия.</p>
                </Card>
            </SwiperSlide>
            </Swiper>
        </div>
        <div className={'container py-5'}>
            <h2>Спикеры</h2>
            <div className={'cards1'}>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture1}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture2}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture3}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture4}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture5}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture6}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture7}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture2}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                    <img src={Picture3}/>
                    <h5 className={'py-2'}>Алексей
                        Некрасов</h5>
                    <hr/>
                    <p style={{fontSize:"12px"}}>Лидер направления Python в
                        МТС, программный
                        директор направления
                        Python в Skillbox. Опыт
                        работы — более 6 лет</p>
                </Card>
                <Card style={{border:"none"}} className={'card2'}>
                <img src={Picture1}/>
                <h5 className={'py-2'}>Алексей
                    Некрасов</h5>
                <hr/>
                <p style={{fontSize:"12px"}}>Лидер направления Python в
                    МТС, программный
                    директор направления
                    Python в Skillbox. Опыт
                    работы — более 6 лет</p>
            </Card>
            </div>
        </div>
        <div className="container page4" style={{background: "#F7F7F5",borderRadius:"10px",gap:"30px"}}>
            <div className={'div2'}>
                <img className={"image9"} src={Kespa}/>
            </div>
            <div className='kurs1 p-3'>
                <h2 className='py-3'>Год английского языка!</h2>
                <li>Бесконечный доступ к обновлениям курса — ваши знания никогда не устареют.</li>
                <li>Тест на профориентацию для самоопределения в IT.</li>
                <li>Возможность выбрать и освоить одну из 4 востребованных IT-профессий.</li>
                <li>Право поменять направление в начале обучения.</li>
                <li>Поддержка от кураторов.</li>
                <li>Практика на реальных проектах и групповые стажировки.</li>
                <li>Помощь в трудоустройстве от Центра карьеры.</li>
                <div className='py-3'>
                    <button style={{height:"40px"}} className='btn btn-primary py-1 px-4'>Записаться на курс</button>
                </div>
            </div>
        </div>
        <div className={'container-fluid py-5 blue my-5'} style={{background:"#E3F1FF"}}>
            <div className="container " style={{height:"auto"}}>
                <div className='Flexdiv'>
                    <div className="width50 p-5 bg-white my-2" style={{borderRadius:"15px"}}>
                        <h2>Стоимость  <br />
                            курса</h2>
                            <img style={{width:"100%"}} src={Crad} alt="" />
                            <div className='py-4 '>
                                <li>Курс в подарок</li>
                                <li>Длительность рассрочки — 12 месяцев</li>
                                <li>Год английского бесплатно</li>
                            </div>
                    </div>
                    <div className="p-5 bg-white width50 my-2" style={{borderRadius:"15px"}}>
                        <h4>Записаться на курс <br />
или получить бесплатную <br />
консультацию</h4>
<Input placeholder={'Email'} style={{height:"40px"}}/>
                        <Input  style={{height:"0px",width:"100%",marginTop:"20px"}}
                                addonBefore={
                                <Cascader
                                    style={{
                                        width: 50,
                                    }}
                                />
                            }
                            defaultValue="Телефон"
                        />
                        <Input style={{height:"40px",width:"100%",marginTop:"45px"}} placeholder={'Электронная почта'}/>
                  <button style={{marginTop:"30px"}} className={'btn btn-primary px-5 py-2'}>Записаться на курс</button> <br/>
                   <input style={{marginTop:"25px"}} type={'checkbox'}/> Я юридическое лицо
                    </div>
                </div>
            </div>
        </div>
        <div c className={'container-fluid vaprosi p-5'} style={{width:"100%",gap:"40px",justifyContent:"center"}}>
            <div className={'w-75'}>
                <h2>Часто задаваемые <br/>
                    вопросы</h2>
            </div>
            <div>
                    <div className='width p-5' style={{background:"#F8F8F8",borderRadius:"10px"}}>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>Я ничего не понимаю в IT. Этот <br /> курс поможет мне
разобраться?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"}}>
                            <h6 style={{width:"80%"}}>На этом курсе будет практика? </h6 >
                            <p style={{width:"80%",color:"grey", fontSize:"13px"}}>Running a small business is always a challenge, and salons are no exception.</p>
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>Я смогу после прохождения <br /> курса сменить
профессию?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>Почему вы так уверены, что у меня <br /> получится найти
работу?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>Сомневаюсь, что смогу стать <br /> программистом. Есть ли
какие-то ограничения?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                    </div>
             </div>
        </div>
        <div className={'container-fluid'} style={{background:"#242424"}}>
             <div className={'footer'}>
                 <div className={'a'}>
                     <h6>+998 71 205 80 60</h6>
                     <p style={{fontSize:"10px"}}>Контактный центр</p>
                     <h6>hello@skillbox.uz</h6>
                 </div>
                 <div className={'a1'}>
                     <p>Публичный договор</p>
                     <p>Политика конфиденциальности</p>
                     <p>Условия акции</p>
                 </div>
                 <div className={'a2'}>
                     <p>Все направления</p>
                     <p>Дизайн</p>
                     <p>Маркетинг</p>
                     <p>Финансы</p>
                     <p>Кино и музыка</p>
                     <p>Начать свое дело</p>
                     <p>Общее образование</p>
                 </div>
                 <div className={'a3'}>
                     <p>Все направления</p>
                     <p>Дизайн</p>
                     <p>Маркетинг</p>
                     <p>Финансы</p>
                     <p>Кино и музыка</p>
                     <p>Начать свое дело</p>
                     <p>Общее образование</p>
                 </div>
                 <div className={'text-secondary a4'}>
                     <p>ООО «UBRAINS», ИНН 308432936</p>
                     <p>Республика Узбекистан, г. Ташкент, Мирабадский
                         р-н, ул. Афросиаб 4б, каб. 102</p>
                     <p>Регистрационный номер 982705</p>
                 </div>

             </div>
        </div>
    </div>
  );
}

export default App;
