<template>
    <div class="container my-4 px-3">
        <h1 class="text-center">
            <font-awesome-icon icon="user" />
            About me
        </h1>
        <div class="row mt-5">
            <div class="col-12 col-md-7 my-2">
                <div class="card mb-5">
                    <div class="row mt-2">
                        <h3 class="card-title my-2">Profile</h3>
                        <div class="col-12 col-md-4">
                            <img src="../../assets/017c44c97a38c1c4999681e28c39271d.jpg"  class="rounded-circle align-middle" />
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="card-body">
                                <div class="card-text text-start">
                                    <p>
                                        初めましてカズキと申します。県庁勤務５年目です。<br/>
                                        業務の中でIT技術に触れていくうちに、仕事として携わって行きたいと思い転職を決意<br/>
                                        直近ではバックエンドを中心に勉強中です。
                                    </p>
                                    <p>
                                        -GitHub: <a href="https://github.com/kaz1877">https://github.com/kaz1877</a><br/>
                                        -Twitter: <a href="https://twitter.com/kazengineer0502">https://twitter.com/kazengineer0502</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-2">
                    <div class="card-body">
                        <h3 class="card-title mb-3">Hobby</h3>
                        <div class="card-text">
                            <div class="text-start mb-1">
                                <ul>
                                    <li>音楽鑑賞
                                        <p>どんなジャンルでも聞きますが、特にロックが好きです。</p>
                                    </li>
                                    <li>ギター
                                        <p>大学時代にバンドをやっており、現在もたまに触っています。</p>
                                    </li>
                                    <li>コーヒー
                                        <p>カフェでコーヒーを飲むのは好きですが、自分で豆から挽いて飲んでみたいと思っています。</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 my-2">
                <div class="card mb-2">
                    <div class="card-body">
                        <h3 class="card-title mb-3">History</h3>
                        <div class="card-text">
                            <div class="text-start mb-1">
                                <p class="historyEra">2014.04</p>
                                <p>大学に入学。心理学を専攻する。</p>
                            </div>
                            <div class="text-start mb-1">
                                <p class="historyEra">2016.06</p>
                                <p>
                                    心理テストを開発するゼミに入る。<br/>
                                    Visual Basicを学び、プログラミングの基礎を叩き込まれる。<br/>
                                    プログラミングで開発することの面白さを見出す。
                                </p>
                            </div>
                            <div class="text-start mb-1">
                                <p class="historyEra">2018.04</p>
                                <p>
                                    某県庁に入庁する。<br />
                                    配属ガチャに破れ、県庁内でも激務の県立病院に配属。<br/>
                                    病院全体の人事労務を担当することになる。
                                </p>
                            </div>
                            <div class="text-start mb-1">
                                <p class="historyEra">2019.07</p>
                                <p>
                                    業務が忙しすぎて過労死ラインまで残業していた。<br/>
                                    身の危険を感じたため、業務効率化に着手する。<br/>
                                </p>
                            </div>
                            <div class="text-start mb-1">
                                <p class="historyEra">2019.10</p>
                                <p>
                                    VBAで業務の一部を自動化することに成功。<br/>
                                    月の残業時間が今までの半分に減らすことができた。<br/>
                                    IT技術は凄いと感じるとともにシステムの開発に携わって見たいと思うようになる。
                                </p>
                            </div>
                            <div class="text-start mb-1">
                                <p class="historyEra">2021.04</p>
                                <p>
                                    本庁の情報システム関連を管理する部署へ異動。<br/>
                                    情報システムに関わる業務をするにあたり多くのエンジニアと関係ができる。
                                </p>
                            </div>
                            <div class="text-start mb-1">
                                <p class="historyEra">2022.02</p>
                                <p>
                                    自分もエンジニアになりたいと思うようになる。<br/>
                                    一念発起し、PHP,Laravel,SQLの基礎を学び始める。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img{
    margin: auto;
    width: 150px;
    background-color: antiquewhite;
}
.historyEra{
    font-size:18px;
    font-weight: 600;
    margin:0;
}
.titleText{
    font-size:20px;
    font-weight: 600;
}
</style>
