const About = () => {
  const topicClass = "font-bold text-gray-900 whitespace-nowrap bg-gray-50 ";
  const cellClass =
    "font-medium text-sm text-gray-900 whitespace-nowrap bg-white ";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="mb-20 flex min-h-screen max-w-2xl flex-col items-center justify-between py-12 py-8">
        <h1>特定商取引法に基づく表記</h1>
        <div className="relative shadow-md sm:rounded-lg">
          <table className=" z-0 table">
            <tbody>
              {/* row 1 */}
              <tr>
                <th className={topicClass}>アプリ名</th>
                <td className={cellClass}>Eveki</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th className={topicClass}>販売事業者名</th>
                <td className={cellClass}>岩下　歌武輝</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th className={topicClass}>代表者名</th>
                <td className={cellClass}>岩下　歌武輝</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th className={topicClass}>所在地</th>
                <td className={cellClass}>
                  <p>〒491-0005</p>
                  <p>愛知県一宮市西大海道新田前39-1</p>
                </td>
              </tr>
              {/* row 5 */}
              <tr>
                <th className={topicClass}>お問い合わせ</th>
                <td className={cellClass}>
                  <p>
                    こちら（evekimobile@gmail.com）からお問い合わせください。
                  </p>
                  <p>
                    ※電話番号はお客様からのご要望に基づき遅滞なく電子メールにて通知いたします。
                  </p>
                  <p>
                    弊社電話番号が必要なお客様は上記フォームよりお申し出ください。
                  </p>
                </td>
              </tr>
              {/* row 6 */}
              <tr>
                <th className={topicClass}>販売価格</th>
                <td className={cellClass}>
                  <p>購入手続きの際に画面に表示されます。</p>
                  消費税は内税として表示しております。
                </td>
              </tr>
              {/* row 7 */}
              <tr>
                <th className={topicClass}>
                  <p>販売価格以外で</p>お客様に発生する金銭
                </th>
                <td className={cellClass}>
                  <div>
                    当サイトのページの閲覧、コンテンツ購入、ソフトウェアのダウンロード等に必要となる
                    <p>
                      インターネット接続料金、通信料金は、お客様のご負担となります。
                    </p>
                  </div>
                </td>
              </tr>
              {/* row 8 */}
              <tr>
                <th className={topicClass}>お支払方法</th>
                <td className={cellClass}>
                  <div>
                    <p>以下のいずれかのお支払方法をご利用いただけます。</p>
                    <p>・各種クレジットカード </p>
                    <p>・携帯電話の料金回収サービス</p>
                    <p>
                      ・その他、購入にかかる決済を代行する会社が提供するお支払方法
                    </p>
                  </div>
                </td>
              </tr>
              {/* row 9 */}
              <tr>
                <th className={topicClass}>商品購入方法</th>
                <td className={cellClass}>
                  App
                  Storeで提供する各アプリケーションの詳細ページから「購入」ボタンを押下し、
                  <p>
                    各種お支払方法で決済していただきますと、アプリケーションがダウンロードできるようになります。
                  </p>
                </td>
              </tr>
              {/* row 10 */}
              <tr>
                <th className={topicClass}>
                  <p>デジタルアイテム等の</p>利用が可能となる時期
                </th>
                <td className={cellClass}>
                  <p>特別な定めを置いている場合を除き、</p>
                  お支払い手続き完了後直ちにご利用いただけます。
                </td>
              </tr>
              {/* row 11 */}
              <tr>
                <th className={topicClass}>動作環境</th>
                <td className={cellClass}>
                  <p>
                    アプリケーションによって利用環境・対応機種が異なります。
                  </p>
                  各アプリケーションのダウンロードの前に、
                  <p>
                    必ず各アプリケーションの詳細ページで利用環境・対応機種をご確認ください。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default About;
