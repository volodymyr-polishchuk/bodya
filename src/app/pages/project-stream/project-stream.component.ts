import { Component, OnInit } from '@angular/core';
import {Project} from '../../shared/model/Project';

@Component({
  selector: 'app-project-stream',
  templateUrl: './project-stream.component.html',
  styleUrls: ['./project-stream.component.scss']
})
export class ProjectStreamComponent implements OnInit {

  projects: Project[] = [
    {
      name: 'Презентація коледжу',
      description: 'Виконаний в стилі презентації сайт, який розповідає і показує про ТБЕК різноманітну інформацію, статистику та інше.\n' +
        'В нижній частині такоє є відео- та фото-презентації аби ще більше поринути в атмосферу коледжу.',
      image: 'http://hwork.net/mypage/img/project_1/project_image_1.png',
      url: 'https://hwork.net/tbec/'
    },
    {
      name: 'Мій профіль',
      description: 'Натхненний дизайном iOS, створив сторінку про себе та свої творіння, часто використовуючи ефект ' +
        'розмиття для різних елементів.\n' +
        'Мої перші спроби зробити цікавий сайт.',
      image: 'http://hwork.net/mypage/img/project_2/project_image_2.png',
      url: 'https://hwork.net/profile/'
    },
    {
      name: 'Сайт для студентів',
      description: 'На сайті є все необхідне для студента: зміни в розкладі, графік дзвінків, домашнє ' +
        'завдання та інша різноманітна інформація.\n' +
        'Також є адміністративний розділ для того, аби можна було редагувати інформацію на сайті будь-де і будь-коли.',
      image: 'http://hwork.net/mypage/img/project_3/project_image_3.png',
      url: 'https://hwork.net/ps/'
    },
    {
      name: 'Власний файлообмінник',
      description: 'Дозволяє завантажити файл, для того, аби потім можна було зручно ним ' +
        'поділитися чи використовувати в своїх цілях будь-де і будь-коли.\n' +
        'На скріншоті видно адміністративні розділи, за допомогою яких можна стежити за роботою файлообмінника та керувати ним.',
      image: 'http://hwork.net/mypage/img/project_4/project_image_4.png',
      url: 'https://hwork.net/files/'
    },
    {
      name: 'Соцмережа для об\'єднання',
      description: 'Тут можна створити профіль, ділитися творчістю, спілкуватися з іншими учасниками.\n' +
        'Дана соцмережа хоч і має мало функцій, але цілком робоча і порадує користувачів з творчими амбіціями.',
      image: 'http://hwork.net/mypage/img/project_5/project_image_5.png',
      url: 'https://hwork.net/secta/'
    },
    {
      name: 'Сайт вихователя',
      description: 'Створений в стилі Material Design сайт для того, щоб продемонструвати багаторічну працю викладача.\n' +
        'Сайт містить багато матеріалів, які пригодяться багатьом вихователям.',
      image: 'http://hwork.net/mypage/img/project_6/project_image_6.png',
      url: 'https://hwork.net/teacher'
    },
    {
      name: 'Сторінка-лендінг',
      description: 'Перші спроби створити landing page власними руками. На сторінці є перелік товарів, їх представлення, опис і т.д.\n' +
        'Прихований адміністративний розділ дозволяє обробляти та збирати замовлення.',
      image: 'http://hwork.net/mypage/img/project_7/project_image_7.png',
      url: 'https://hwork.net/okta/index.php'
    },
    {
      name: 'Улюблений трек',
      description: 'Знайомство з HTML5-плеєром переросло у фан-сторінку треку вісімдесятих років.\n' +
        'На сторінці є кнопки керування плеєром, слова та відеокліп.',
      image: 'http://hwork.net/mypage/img/project_8/project_image_8.png',
      url: 'https://hwork.net/only/'
    },
    {
      name: 'Надсилач повідомлень',
      description: 'Тепер ви можете анонімно або відкрито надіслати будь-яке повідомлення на будь-яку email адресу.\n' +
        'Надсилання повідомлень онлайн без реєстрації.',
      image: 'http://hwork.net/mypage/img/project_10/project_image_10.png',
      url: 'https://hwork.net/mail/'
    },
  ];
  concepts: Project[] = [
    {
      name: 'Градієнт',
      description: 'Популярний нині прийом може урізноманітнити кольорову гаму сайта, привернути увагу користувача. ' +
        'Як радіальний так і лінійний градієнти можна використовувати як елементи фону сторінки або ж простої кнопки.',
      image: 'assets/images/concept-1-gradient.png',
      url: ''
    },
    {
      name: 'Прозорість',
      description: 'За допомогою цього прийому можна створити цікаві місця для тексту, чи сфокосувати користувача на якомусь елементі. ' +
        'Можна використовувати для великих і малих елементів і експериментувати з рівнями прозорості.',
      image: 'assets/images/concept-2-transparent.png',
      url: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
