import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Политика конфиденциальности | Флагман/Tech',
  description: 'Политика конфиденциальности и обработки персональных данных компании Флагман/Tech',
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-foreground">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
              <p>
                Компания Флагман/Tech (далее – «Компания») уважает конфиденциальность своих пользователей и стремится обеспечить безопасность их персональных данных. Данная политика конфиденциальности описывает, как мы собираем, используем и защищаем информацию о вас при использовании нашего веб-сайта и услуг.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Какую информацию мы собираем</h2>
              <p>Мы собираем информацию, которую вы добровольно предоставляете нам:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Имя и контактная информация (электронная почта, телефон)</li>
                <li>Информацию о вашем бизнесе и проекте</li>
                <li>Информацию о ваших интересах и предпочтениях</li>
                <li>Другую информацию, которую вы добровольно предоставляете в формах на сайте</li>
              </ul>
              <p className="mt-4">
                Мы также собираем информацию автоматически:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP-адрес и информацию о браузере</li>
                <li>Информацию о том, как вы используете наш сайт</li>
                <li>Данные о посещаемых страницах и времени посещения</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Как мы используем информацию</h2>
              <p>Мы используем собранную информацию для следующих целей:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Предоставления и улучшения наших услуг</li>
                <li>Обработки вашего запроса или заявки</li>
                <li>Отправки информационных писем и обновлений</li>
                <li>Анализа использования сайта и улучшения пользовательского опыта</li>
                <li>Выполнения юридических и нормативных требований</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Защита данных</h2>
              <p>
                Мы принимаем разумные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи информации через Интернет не является абсолютно безопасным.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Раскрытие информации третьим лицам</h2>
              <p>
                Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, когда это требуется по закону или необходимо для предоставления услуг (например, платежные системы, хостинг-провайдеры).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Куки и подобные технологии</h2>
              <p>
                Наш сайт использует куки для улучшения пользовательского опыта и анализа трафика. Вы можете управлять параметрами куки в настройках вашего браузера.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Ваши права</h2>
              <p>У вас есть право:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Доступа к вашим персональным данным</li>
                <li>Исправления неточной информации</li>
                <li>Удаления своих данных</li>
                <li>Отказа от получения рекламной информации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Изменения политики</h2>
              <p>
                Мы оставляем за собой право изменять данную политику конфиденциальности. Если мы внесем существенные изменения, мы уведомим вас, обновив дату последнего обновления на этой странице.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Связь с нами</h2>
              <p>
                Если у вас есть вопросы о данной политике конфиденциальности или о том, как мы обрабатываем ваши данные, пожалуйста, свяжитесь с нами:
              </p>
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="font-semibold text-foreground mb-2">Флагман/Tech</p>
                <p>Email: <a href="mailto:hello@flgmn.tech" className="text-primary hover:underline">hello@flgmn.tech</a></p>
                <p>Телефон: <a href="tel:+79656027624" className="text-primary hover:underline">+7 965 602 7624</a></p>
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                Последнее обновление: 1 марта 2026
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
