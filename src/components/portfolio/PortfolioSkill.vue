<template>
    <div class="container my-4 px-3">
        <div class="text-center">
            <h1>
                <font-awesome-icon :icon="['fas','database']" />
                My Skill
            </h1>
        </div>
        <div class="row mt-5">
            <div class="col-md-4 col-12 mb-2">
                <div class="card">
                    <div class="card-title mt-1 p-3 text-md-start h4">Language</div>
                    <div class="card-body">
                        <table class="table table-sm">
                            <tbody>
                                <tr>
                                    <td>HTML5</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="3"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CSS</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="3"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>VB</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="3"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>VBA</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="3"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>PHP</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="2"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="1"></p>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mb-2">
                <div class="card">
                    <div class="card-title mt-1 p-3 text-md-start h4">Framework</div>
                    <div class="card-body">
                        <table class="table table-sm">
                            <tbody>
                                <tr>
                                    <td>Bootstrap</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="3"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Laravel</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="2"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vue.js</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="1"></p>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mb-2">
                <div class="card">
                    <div class="card-title mt-1 p-3 text-md-start h4">Others</div>
                    <div class="card-body">
                        <table class="table table-sm">
                            <tbody>
                                <tr>
                                    <td>git</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="2"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Github</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="2"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Docker</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="2"></p>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Unity</td>
                                    <td>
                                        <span class="rating">
                                            <p class="rate" data-rate="1"></p>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
td{
    vertical-align: middle;
}
.rate {
    font-size:20px;
    position: relative;
    z-index: 0;
    display: inline-block;
    white-space: nowrap;
    color: #CCCCCC;
    margin:0;
}
.rate:before, .rate:after {
    content: '★★★★★';
}
.rate:after {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    color: #79bded;
}
.rate[data-rate="5"]:after{ width: 100%; } /* 星5 */
.rate[data-rate="4"]:after{ width: 80%; } /* 星4 */
.rate[data-rate="3"]:after{ width: 60%; } /* 星3 */
.rate[data-rate="2"]:after{ width: 40%; } /* 星2 */
.rate[data-rate="1"]:after{ width: 20%; } /* 星1 */
.rate[data-rate="0"]:after{ width: 0%; } /* 星0 */
</style>
