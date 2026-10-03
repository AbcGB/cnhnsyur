import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const TG_HANDLE = 'sanya_acupuncture_ru';

const translations = {
  zh: {
    brand: 'Sanya TCM Care',
    nav: {
      home: '首页',
      hospital: '医院介绍',
      service: '服务',
      doctor: '医生',
      pricing: '价格',
      faq: 'FAQ',
      contact: '联系',
    },
    topBadge: '三亚正规医院 · 俄语支持 · 预约协调',
    heroTitle: '三亚正规中医院针灸服务',
    heroSubtitle: '面向俄罗斯游客的中医针灸就医入口，帮助您快速理解医院、流程、费用与预约方式。',
    ctaPrimary: '预约咨询',
    ctaSecondary: 'Telegram 咨询',
    trustTitle: '为什么选择正规医疗机构?',
    trustCards: [
      ['正规医院', '提供更透明的就诊流程和正式收费。'],
      ['指定医生', '由专业医生进行病情评估和治疗建议。'],
      ['俄语协助', '从咨询到复诊，帮助您降低语言障碍。'],
    ],
    processTitle: '治疗流程',
    processList: [
      '提交基本病情资料',
      '进行初步沟通与筛选',
      '安排医院就诊与医生评估',
      '确认治疗方案与后续安排',
    ],
    doctorTitle: '医生与服务',
    doctorText: '我们协助患者与医院建立沟通桥梁，确保就诊前信息清晰、治疗安排透明，并在治疗期间保持跟进。',
    pricingTitle: '费用结构',
    pricingText: '医疗费用以医院正式收费为准，平台提供俄语咨询、预约、资料整理和后续管理支持。',
    pricingItems: [
      ['医院医疗费用', '按正式医疗收费标准执行。'],
      ['患者协调服务', '包括预约、沟通、资料整理、复诊提醒。'],
      ['可选支持', '可根据需求增加更细节的安排与沟通支持。'],
    ],
    faqTitle: '常见问题',
    faq: [
      {
        q: '这是不是私人中医馆？',
        a: '我们的模式更接近“国际患者服务入口”，最终就诊由正规医院医生进行评估和治疗。',
      },
      {
        q: '需要俄语翻译吗？',
        a: '首次沟通通常需要俄语支持，后续可根据实际情况进行结构化沟通和跟进。',
      },
      {
        q: '需要提前预约吗？',
        a: '建议提前预约，以便我们更好地整理病情资料、安排就诊和沟通。',
      },
      {
        q: '费用怎么计算？',
        a: '先区分医院医疗费用和患者协调服务，不要将其简单理解为单次针灸价格。',
      },
    ],
    formTitle: '准备就诊信息',
    formSubtitle: '请填写以下资料，方便我们在就诊前进行整理与沟通。',
    fields: {
      name: '姓名',
      age: '年龄',
      gender: '性别',
      issue: '主要问题',
      area: '疼痛位置',
      time: '症状持续时间',
      note: '备注',
      submit: '提交信息',
    },
    contactTitle: '联系与咨询',
    contactText: '如果您希望进一步了解服务流程、预约方式或就诊前准备，请通过 Telegram 联系我们。',
    footer: '三亚中医针灸国际患者服务平台',
  },
  ru: {
    brand: 'Sanya TCM Care',
    nav: {
      home: 'Главная',
      hospital: 'Больница',
      service: 'Услуги',
      doctor: 'Врач',
      pricing: 'Стоимость',
      faq: 'FAQ',
      contact: 'Контакты',
    },
    topBadge: 'Официальная больница в Санье · Русскоязычное сопровождение · Запись заранее',
    heroTitle: 'Иглоукалывание в Санье',
    heroSubtitle: 'Русскоязычный вход в систему лечения традиционной китайской медицины для пациентов и туристов, [...]',
    ctaPrimary: 'Записаться на прием',
    ctaSecondary: 'Написать в Telegram',
    trustTitle: 'Почему важна официальная больница?',
    trustCards: [
      ['Официальная больница', 'Более прозрачный процесс приема, оформление и оплата.'],
      ['Лечащий врач', 'Врач оценивает состояние и определяет план лечения.'],
      ['Русская поддержка', 'Помогаем снизить языковой барьер до и после визита.'],
    ],
    processTitle: 'Как проходит процесс',
    processList: [
      'Заполняете основную информацию о проблеме',
      'Проводим первичное согласование',
      'Организуем визит и прием у врача',
      'Определяем дальнейший план лечения',
    ],
    doctorTitle: 'Врач и сервис',
    doctorText: 'Мы помогаем соединить пациента и больницу, чтобы перед визитом информация была понятной, а лечен�[...]',
    pricingTitle: 'Структура стоимости',
    pricingText: 'Медицинские расходы зависят от официальной цены учреждения, а платформа обеспечивает консульта[...'] ,
    pricingItems: [
      ['Медицинская стоимость', 'Выплачивается в соответствии с официальным прайсом учреждения.'],
      ['Сервис для пациентов', 'Планирование, запись, подготовка данных, напоминания.'],
      ['Дополнительная поддержка', 'По запросу можно организовать более подробную помощь.'],
    ],
    faqTitle: 'Частые вопросы',
    faq: [
      {
        q: 'Это частная клиника?',
        a: 'Наша модель ближе к сервису для иностранных пациентов, а сам прием и лечение организуются в официал�[...]',
      },
      {
        q: 'Нужен ли переводчик?',
        a: 'Для первого визита обычно полезно русскоязычное сопровождение, чтобы лучше понять врача и рекоменд[...'] ,
      },
      {
        q: 'Нужно ли записываться заранее?',
        a: 'Да, заранее лучше записаться, чтобы подготовить информацию и организовать визит более удобно.',
      },
      {
        q: 'Как рассчитывается стоимость?',
        a: 'Сначала отделяют медицинские расходы и сервис поддержки, чтобы понять реальную структуру затрат.',
      },
    ],
    formTitle: 'Подготовка к визиту',
    formSubtitle: 'Пожалуйста, заполните информацию, чтобы мы могли лучше подготовиться к вашему визиту.',
    fields: {
      name: 'Имя',
      age: 'Возраст',
      gender: 'Пол',
      issue: 'Основная проблема',
      area: 'Локализация боли',
      time: 'Длительность симптомов',
      note: 'Примечание',
      submit: 'Отправить',
    },
    contactTitle: 'Контакты и консультация',
    contactText: 'Если вам нужно больше информации о процессе записи, подготовке к приему или стоимости, напишите �[...]',
    footer: 'Sanya TCM International Patient Service',
  },
  en: {
    brand: 'Sanya TCM Care',
    nav: {
      home: 'Home',
      hospital: 'Hospital',
      service: 'Services',
      doctor: 'Doctor',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
    },
    topBadge: 'Official hospital in Sanya · Russian support · Appointment coordination',
    heroTitle: 'Acupuncture in Sanya',
    heroSubtitle: 'A patient-first platform for Russian-speaking visitors seeking acupuncture and TCM care in a reliable hospital setting.',
    ctaPrimary: 'Book a consultation',
    ctaSecondary: 'Chat on Telegram',
    trustTitle: 'Why choose an official hospital?',
    trustCards: [
      ['Official hospital', 'A clearer clinical journey and more transparent fees.'],
      ['Qualified doctor', 'Medical assessment and treatment plan are led by a physician.'],
      ['Russian support', 'Reduced language barriers before and during treatment.'],
    ],
    processTitle: 'How it works',
    processList: [
      'Submit your basic condition and needs',
      'Receive initial coordination and screening',
      'Arrange hospital evaluation and doctor review',
      'Confirm treatment plan and follow-up',
    ],
    doctorTitle: 'Doctor & service',
    doctorText: 'We help connect patients with the hospital and clarify information before care begins, making the treatment pathway more transparent and manageable.',
    pricingTitle: 'Cost structure',
    pricingText: 'Hospital medical fees follow official pricing, while the platform provides language support, scheduling, preparation, and coordination.',
    pricingItems: [
      ['Hospital medical costs', 'Paid according to the hospital’s official pricing.'],
      ['Patient coordination', 'Scheduling, communication, preparation, follow-up reminders.'],
      ['Optional support', 'Extra coordination and assistance can be arranged as needed.'],
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Is this a private clinic?',
        a: 'The care pathway is designed around an official medical establishment, with a patient-service layer for coordination and language support.',
      },
      {
        q: 'Do I need a translator?',
        a: 'Russian-language support is strongly recommended for the first visit, especially when discussing symptoms and treatment plans.',
      },
      {
        q: 'Should I book in advance?',
        a: 'Yes, booking in advance is recommended so relevant information can be prepared and the visit can be better organized.',
      },
      {
        q: 'How are fees calculated?',
        a: 'Hospital treatment costs and patient-service fees are separate, so the full picture is clearer than a single flat session rate.',
      },
    ],
    formTitle: 'Prepare for your visit',
    formSubtitle: 'Please share your current situation so we can prepare a clearer consultation path for you.',
    fields: {
      name: 'Name',
      age: 'Age',
      gender: 'Gender',
      issue: 'Main issue',
      area: 'Pain area',
      time: 'Duration',
      note: 'Notes',
      submit: 'Submit',
    },
    contactTitle: 'Contact & consultation',
    contactText: 'If you want to learn more about the process, appointment steps, or medical preparation, contact us via Telegram.',
    footer: 'Sanya TCM International Patient Service',
  },
};

const navOrder = ['home', 'hospital', 'service', 'doctor', 'pricing', 'faq', 'contact'];

function App() {
  const [lang, setLang] = useState('ru');
  const text = translations[lang];

  const nav = useMemo(
    () => ({
      home: text.nav.home,
      hospital: text.nav.hospital,
      service: text.nav.service,
      doctor: text.nav.doctor,
      pricing: text.nav.pricing,
      faq: text.nav.faq,
      contact: text.nav.contact,
    }),
    [text]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const msg = `Name: ${form.get('name') || ''}\nAge: ${form.get('age') || ''}\nGender: ${form.get('gender') || ''}\nIssue: ${form.get('issue') || ''}\nArea: ${form.get('area') || ''}\nDuration: ${form.get('time') || ''}\nNote: ${form.get('note') || ''}`;
    const tgUrl = `https://t.me/${TG_HANDLE}?text=${encodeURIComponent(msg)}`;
    // Open Telegram chat with prefilled message. This provides an immediate contact path for MVP.
    window.open(tgUrl, '_blank');
  }

  return (
    <>
      <header className="topbar">
        <div className="container navwrap">
          <div className="brand">{text.brand}</div>
          <nav className="nav">
            {navOrder.map((key) => (
              <a href={`#${key}`} key={key}>{nav[key]}</a>
            ))}
          </nav>
          <div className="langswitch">
            {['zh', 'ru', 'en'].map((option) => (
              <button
                key={option}
                className={option === lang ? 'active' : ''}
                onClick={() => setLang(option)}
                type="button"
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">{text.topBadge}</div>
              <h1>{text.heroTitle}</h1>
              <p>{text.heroSubtitle}</p>
              <div className="cta-row">
                <a href="#contact" className="btn primary">{text.ctaPrimary}</a>
                <a href={`https://t.me/${TG_HANDLE}`} target="_blank" rel="noreferrer" className="btn secondary">{text.ctaSecondary}</a>
              </div>
            </div>
            <div className="hero-card">
              <div className="mini-label">Sanya</div>
              <h3>Official Care Path</h3>
              <ul>
                <li>Hospital intake</li>
                <li>Patient preparation</li>
                <li>Russian support</li>
                <li>Clear treatment flow</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>{text.trustTitle}</h2>
            <div className="cardgrid">
              {text.trustCards.map(([title, desc], index) => (
                <article className="card" key={index}>
                  <div className="cardindex">0{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="hospital">
          <div className="container two-col">
            <div>
              <span className="eyebrow">Hospital</span>
              <h2>Official Medical Path</h2>
              <p>
                The service is positioned as a patient coordination layer between Russian-speaking visitors and a formal traditional medicine hospital environment in Sanya.
              </p>
            </div>
            <div className="info-panel">
              <div className="info-row"><strong>Location</strong><span>Sanya, Hainan</span></div>
              <div className="info-row"><strong>Service type</strong><span>Acupuncture + coordination</span></div>
              <div className="info-row"><strong>Language</strong><span>Russian / Chinese / English</span></div>
              <div className="info-row"><strong>Flow</strong><span>Consult → prepare → hospital visit</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="service">
          <div className="container">
            <h2>{text.processTitle}</h2>
            <div className="steps">
              {text.processList.map((step, index) => (
                <div className="step" key={index}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="doctor">
          <div className="container two-col">
            <div>
              <span className="eyebrow">Doctor</span>
              <h2>{text.doctorTitle}</h2>
              <p>{text.doctorText}</p>
            </div>
            <div className="doctor-box">
              <div className="avatar">M</div>
              <div>
                <h3>Dr. Meng</h3>
                <p>Traditional acupuncture specialist</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <h2>{text.pricingTitle}</h2>
            <p className="lead">{text.pricingText}</p>
            <div className="pricing-grid">
              {text.pricingItems.map(([label, desc], index) => (
                <article className="price-card" key={index}>
                  <h3>{label}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="faq">
          <div className="container">
            <h2>{text.faqTitle}</h2>
            <div className="faq-list">
              {text.faq.map((item) => (
                <div className="faq-item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div>
              <h2>{text.formTitle}</h2>
              <p>{text.formSubtitle}</p>
              <div className="contact-list">
                <span>Telegram</span>
                <span>Email</span>
                <span>WeChat / coordination</span>
              </div>
            </div>

            <form className="form-card" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>{text.fields.name}</label>
                <input name="name" type="text" placeholder="" />
              </div>
              <div className="field-row two">
                <label>{text.fields.age}</label>
                <input name="age" type="text" />
                <label>{text.fields.gender}</label>
                <input name="gender" type="text" />
              </div>
              <div className="field-row">
                <label>{text.fields.issue}</label>
                <input name="issue" type="text" />
              </div>
              <div className="field-row">
                <label>{text.fields.area}</label>
                <input name="area" type="text" />
              </div>
              <div className="field-row">
                <label>{text.fields.time}</label>
                <input name="time" type="text" />
              </div>
              <div className="field-row">
                <label>{text.fields.note}</label>
                <textarea name="note" rows="4" />
              </div>
              <button type="submit" className="btn primary full">{text.fields.submit}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div>{text.footer}</div>
          <div>© 2026</div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
