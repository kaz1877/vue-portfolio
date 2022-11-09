<template>
		<div class="container my-4 px-3">
            <div class="text-center">
                <h1>
                    <font-awesome-icon :icon="['fas','folder-open']" />
                    Works
                </h1>
            </div>
			<div class="row mt-5">
				<div class="col-12 col-md-6 col-lg-4">
					<div class="card" >
						<img src="../../assets/portfoliosite.png" class="card-img-top" alt="portfolioSite">
						<div class="card-body">
							<h5 class="works-title">ポートフォリオ</h5>
							<p class="works-text">Vue.jsでポートフォリオサイトを作成しました。</p>
							<p class="works-language">HTML/CSS/Bootstrap5/Vue.js</p>
							<div class="text-center">
								<a href="https://github.com/kaz1877/vue-portfolio.git" >githubへ</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4" >
					<div class="card">
						<img src="../../assets/My-bookshelf.png" class="card-img-top" alt="My-bookshelf">
						<div class="card-body">
							<h5 class="works-title">My Bookshelf</h5>
							<p class="works-text">
                                web本棚サービスです。<br/>
                                自分の持っている本、購入したい本を登録することができます。
                            </p>
							<p class="works-language">HTML/CSS/bootstrap/php/Laravel</p>
							<div class="text-center">
								<a href="https://rocky-shelf-10901.herokuapp.com">サービスはこちら</a>
							</div>
							<div class="text-center">
								<a href="https://github.com/kaz1877/My-bookshelf.git" >githubへ</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4" >
					<div class="card">
						<img src="../../assets/VBA_Tool.png" class="card-img-top" alt="VBATool">
						<div class="card-body">
							<h5 class="works-title">業務効率化ツール</h5>
							<p class="works-text">
                                VBAで業務効率化ツールを作成しました。<br/>
                                年次有給休暇日数や残日数を計算し転記するツールなどVBAで様々なツールを作成しました。
                            </p>
							<p class="works-language">VBA</p>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<style scoped>
.card{
	margin: 0 auto 60px;
	max-width: 380px;
    height: 480px;
}
.card-img-top{
    height:198px;
    margin-bottom: 8px;
}
.works-title{
    font-weight: 600;
    margin-bottom: 2rem;
}
.works-text{
    margin-bottom: 0.5rem;
    padding:0 1rem;
    text-align: start;
}
.works-language{
    font-size:14px;
    margin-bottom: 0.5rem;
}
</style>
