import React, { useState } from 'react';
import {
  Home, BookOpen, Map,  User,
  Clock, CheckCircle, Search, Bell,
  ArrowLeft, ArrowRight, Code, PlayCircle, RefreshCw,
   Box,  Award, Heart, Github,
  Star, Book, Layout, Lock
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);


  const lessons = [
    {
      id: 1,
      title: "Введение в React",
      duration: "30 минут",
      type: "Основы",
      status: "active",
      steps: [
        {
          title: "Что такое React?",
          content: `
            <div class="prose">
              <h2 class="text-2xl font-bold mb-4">Добро пожаловать в мир React!</h2>
              <p class="mb-4">React - это JavaScript библиотека для создания пользовательских интерфейсов.</p>
              <p class="mb-4">В этом курсе вы научитесь:</p>
              <ul class="list-disc pl-6 mb-4">
                <li>Создавать компоненты</li>
                <li>Управлять состоянием</li>
                <li>Работать с JSX</li>
              </ul>
            </div>
          `,
          type: 'theory'
        },
        {
          title: "Создание компонента",
          content: `
            <div class="prose">
              <h2 class="text-2xl font-bold mb-4">Ваш первый React компонент</h2>
              <p class="mb-4">Давайте создадим простой компонент-приветствие:</p>
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p class="font-bold">Задание:</p>
                <p>Создайте компонент Welcome, который выводит "Привет, React!"</p>
              </div>
            </div>
          `,
          type: 'practice',
          initialCode: `function Welcome() {
  // Ваш код здесь
  
}

export default Welcome;`,
          solution: 'return <h1>Привет, React!</h1>'
        },
        {
          title: "Поздравляем!",
          content: `
            <div class="prose">
              <h2 class="text-2xl font-bold mb-4">🎉 Первый шаг сделан!</h2>
              <p class="mb-4">Вы успешно создали свой первый React компонент.</p>
              <p class="text-green-600 font-bold">Продолжайте обучение! 👍</p>
            </div>
          `,
          type: 'summary'
        }
      ]
    },
    {
      id: 2,
      title: "Компоненты и пропсы",
      duration: "45 минут",
      type: "Основы",
      status: "locked",
      description: "Изучение передачи данных между компонентами"
    },
    {
      id: 3,
      title: "Состояние и хуки",
      duration: "60 минут",
      type: "Средний",
      status: "locked",
      description: "Работа с хуками useState и useEffect"
    },
    {
      id: 4,
      title: "Маршрутизация",
      duration: "45 минут",
      type: "Средний",
      status: "locked",
      description: "Изучение React Router"
    },
    {
      id: 5,
      title: "Управление состоянием",
      duration: "90 минут",
      type: "Продвинутый",
      status: "locked",
      description: "Работа с Redux и Context API"
    },
    {
      id: 6,
      title: "Оптимизация",
      duration: "60 минут",
      type: "Продвинутый",
      status: "locked",
      description: "Методы оптимизации React приложений"
    }
  ];

  const Sidebar = () => (
      <div className="w-64 h-screen bg-gray-900 text-white p-4 fixed left-0 top-0">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Box size={24} />
          </div>
          <h1 className="text-xl font-bold">React Flow</h1>
        </div>

        {[
          { id: 'home', icon: Home, label: 'Главная' },
          { id: 'courses', icon: BookOpen, label: 'Уроки' },
          { id: 'roadmap', icon: Map, label: 'Роадмап' },
          { id: 'profile', icon: User, label: 'Профиль' },
        ].map(item => (
            <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSelectedLesson(null);
                  setSelectedCourse(null);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl mb-2 transition-colors
            ${activeTab === item.id ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'hover:bg-gray-800'}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
        ))}

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="font-medium mb-2">Прогресс обучения</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <Clock size={14} />
              <span>Урок 1 из 6</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-full w-1/6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
  );

  const Header = () => (
      <header className="h-16 bg-white border-b fixed top-0 right-0 left-64 z-10">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {selectedLesson ? (
                <button
                    onClick={() => setSelectedLesson(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ArrowLeft size={20} />
                </button>
            ) : null}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                  type="text"
                  placeholder="Поиск по урокам..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                A
              </div>
              <span className="text-sm font-medium">Ученик</span>
            </div>
          </div>
        </div>
      </header>
  );

  const HomePage = () => (
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Добро пожаловать в React Flow! 👋</h1>
          <p className="text-blue-100 text-lg mb-6">
            Образовательная платформа для изучения React с интерактивными уроками и практическими заданиями
          </p>
          <button
              onClick={() => setActiveTab('courses')}
              className="px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
          >
            Начать обучение
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Layout size={24} />
            </div>
            <h2 className="text-lg font-medium mb-2">Интерактивный редактор</h2>
            <p className="text-gray-600">Практикуйтесь в написании кода прямо в браузере</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Book size={24} />
            </div>
            <h2 className="text-lg font-medium mb-2">Пошаговое обучение</h2>
            <p className="text-gray-600">Структурированные уроки с теорией и практикой</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Award size={24} />
            </div>
            <h2 className="text-lg font-medium mb-2">Система достижений</h2>
            <p className="text-gray-600">Отслеживайте свой прогресс в обучении</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">О проекте</h2>
          <p className="text-gray-600 mb-4">
            React Flow - это учебный проект, разработанный для демонстрации возможностей создания
            образовательной платформы с использованием React. Проект включает в себя:
          </p>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Интерактивные уроки по React
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Встроенный редактор кода
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Систему проверки заданий
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Современный пользовательский интерфейс
            </li>
          </ul>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Heart size={16} className="text-red-500" />
            Создано с любовью к React
          </div>
        </div>
      </div>
  );

  const CoursesPage = () => (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Уроки React</h2>
        <div className="grid grid-cols-2 gap-6">
          {lessons.map(lesson => (
              <div
                  key={lesson.id}
                  onClick={() => lesson.status === 'active' ? setSelectedLesson(lesson) : null}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] ${
                      lesson.status === 'locked' ? 'opacity-75' : ''
                  }`}
              >
                <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                    lesson.type === 'Основы' ? 'bg-green-100 text-green-600' :
                        lesson.type === 'Средний' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'
                }`}>
                  {lesson.type}
                </span>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4">{lesson.description || 'Изучите основы React в этом уроке'}</p>
                  <div className="flex items-center justify-between">
                    {lesson.status === 'locked' ? (
                        <div className="flex items-center gap-2 text-gray-500">
                          <Lock size={16} />
                          <span>Заблокировано</span>
                        </div>
                    ) : (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Начать урок
                        </button>
                    )}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );

  const RoadmapPage = () => (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Путь обучения React</h2>
        <div className="relative space-y-8">
          {[
            { title: "Основы React", status: "completed", items: ["JSX", "Компоненты", "Пропсы"] },
            { title: "React Hooks", status: "active", items: ["useState", "useEffect", "Кастомные хуки"] },
            { title: "Продвинутые концепции", status: "locked", items: ["Context", "Route", "Redux"] },
            { title: "Практика", status: "locked", items: ["Работа с API", "Авторизация", "Деплой"] }
          ].map((section, idx) => (
              <div key={idx} className="relative pl-8">
                <div className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center
              ${section.status === 'completed' ? 'bg-green-500' :
                    section.status === 'active' ? 'bg-blue-500' : 'bg-gray-300'}`}>
                  {section.status === 'completed' && <CheckCircle size={16} className="text-white" />}
                  {section.status === 'active' && <PlayCircle size={16} className="text-white" />}
                </div>
                {idx !== 3 && (
                    <div className="absolute left-3 top-6 bottom-0 w-px bg-gray-200"></div>
                )}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium mb-4">{section.title}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {section.items.map((item, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-lg text-sm">
                          {item}
                        </div>
                    ))}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );

  const ProfilePage = () => (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-medium">
              A
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Ученик</h2>
              <p className="text-gray-600">Начинающий React разработчик</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold mb-1">1/6</div>
              <div className="text-gray-600">Уроков пройдено</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold mb-1">30</div>
              <div className="text-gray-600">Минут в обучении</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold mb-1">1</div>
              <div className="text-gray-600">Достижений</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold mb-1">16%</div>
              <div className="text-gray-600">Общий прогресс</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Достижения</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <Award size={24} />
              </div>
              <div>
                <div className="font-medium">Первые шаги</div>
                <div className="text-sm text-gray-600">Завершен первый урок</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl opacity-50">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <Star size={24} />
              </div>
              <div>
                <div className="font-medium">Мастер React</div>
                <div className="text-sm text-gray-600">Завершены все уроки</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

  const LessonPage = () => {
    if (!selectedLesson) return null;

    return (
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Прогресс урока</span>
              <span className="text-sm text-gray-600">
              Шаг {currentStep + 1} из {selectedLesson.steps.length}
            </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / selectedLesson.steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div dangerouslySetInnerHTML={{
                  __html: selectedLesson.steps[currentStep].content
                }} />
              </div>

              <div className="flex items-center justify-between">
                <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-4 py-2 flex items-center gap-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                >
                  <ArrowLeft size={16} />
                  Назад
                </button>
                {selectedLesson.steps[currentStep].type !== 'practice' && (
                    <button
                        onClick={() => setCurrentStep(Math.min(selectedLesson.steps.length - 1, currentStep + 1))}
                        disabled={currentStep === selectedLesson.steps.length - 1}
                        className="px-4 py-2 flex items-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      Далее
                      <ArrowRight size={16} />
                    </button>
                )}
              </div>
            </div>

            {selectedLesson.steps[currentStep].type === 'practice' && (
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <div className="flex items-center gap-2 text-white">
                      <Code size={20} />
                      <span>Редактор кода</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                          onClick={() => setCode(selectedLesson.steps[currentStep].initialCode)}
                          className="p-2 text-gray-400 hover:text-white"
                      >
                        <RefreshCw size={16} />
                      </button>
                      <button
                          onClick={() => {
                            if (code.includes(selectedLesson.steps[currentStep].solution)) {
                              setResult('Отлично! Задание выполнено верно!');
                              setTimeout(() => {
                                setResult('');
                                setCurrentStep(currentStep + 1);
                              }, 1500);
                            } else {
                              setResult('Попробуйте еще раз. Проверьте правильность решения.');
                            }
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                      >
                        <PlayCircle size={16} />
                        Проверить
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-96 bg-gray-800 text-white p-4 rounded-lg font-mono text-sm focus:outline-none"
                    placeholder="Введите ваш код здесь..."
                />
                  </div>

                  {result && (
                      <div className={`p-4 border-t border-gray-800 ${
                          result.includes('Отлично') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {result}
                      </div>
                  )}
                </div>
            )}
          </div>
        </div>
    );
  };

  const Footer = () => (
      <footer className="mt-auto py-6 px-6 border-t">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-gray-500">
          <span>Designed & Developed with</span>
          <Heart size={16} className="text-red-500 fill-red-500" />
          <span>by</span>
          <a
              href="https://github.com/tryd44sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2"
          >
            Trydash
            <Github size={16} />
          </a>
        </div>
      </footer>
  );

  return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="ml-64 min-h-screen flex flex-col">
          <Header />
          <main className="pt-24 px-6 pb-6 flex-1">
            {selectedLesson ? (
                <LessonPage />
            ) : (
                <>
                  {activeTab === 'home' && <HomePage />}
                  {activeTab === 'courses' && <CoursesPage />}
                  {activeTab === 'roadmap' && <RoadmapPage />}
                  {activeTab === 'profile' && <ProfilePage />}
                </>
            )}
          </main>
          <Footer />
        </div>
      </div>
  );
};



export default App;