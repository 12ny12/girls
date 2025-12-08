// script.js

// HTMLの読み込みが完了してから処理を開始
document.addEventListener('DOMContentLoaded', function() {

    /**
     * ヘッダーのスクロールエフェクト
     * ページをスクロールした量に応じて、ヘッダーに 'scrolled' クラスを付け外しします。
     * これにより、背景色などをCSSで変化させることができます。
     */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        // window.scrollYは、垂直方向のスクロール量を取得します
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    /**
     * よくある質問 (FAQ) のアコーディオン機能
     * 質問部分をクリックすると、回答が開いたり閉じたりします。
     */
    const faqQuestions = document.querySelectorAll('.faq-question');

    // forEachを使って、取得した全ての質問要素に同じ処理を設定します
    faqQuestions.forEach(function(question) {
        // 'click' イベント（クリックされた時）に実行する処理
        question.addEventListener('click', function() {
            // クリックされた質問の親要素である .faq-item を取得
            const faqItem = question.parentElement;
            
            // .faq-item に 'active' クラスを付けたり外したりします
            // CSS側で、.activeクラスがついた時のスタイル（回答を開くなど）が定義されています
            faqItem.classList.toggle('active');
        });
    });

});
