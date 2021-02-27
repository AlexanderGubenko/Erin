<template lang="pug">
.writer-letter
    article.article
        header.header
            h1.h1 An important note from erin
        section.section
            .content
                p.p Congrats [Name]!
                p.p It’s Erin and I’m SO excited to see you join the SHIFT family. You’ve just made a great decision to get your health on track and I want to take a second to applaud you!
                p.p If you’ve made it this far, I know you’re serious about reaching your goal and I want to make sure you have everything you need.
                p.p Not only will you get 15-minute workouts (to help you accelerate your results) AND a treasure trove of delicious and fat-burning recipes… but I’ve also put together a few special offers just for you.
                p.p Think of it as my way of saying “thank you” for trusting me to join you on your health journey!
                p.p Please don’t just skip through what comes next because these are designed to help you get faster results – and love every minute of it!
                p.p And, I only share these special offers with those new to our community. So, read everything carefully and don’t miss out.
                p.p I’ll see you in SHIFT :)
                p.p Erin
                .signature-author
                    .signature
                        picture
                            source(srcset="img/author/signature.webp", type="image/webp")
                            img.img(src="img/author/signature.png"  alt="author")
                    .author
                        .frame
                            picture
                                source(srcset="img/author/erin.webp", type="image/webp")
                                img.main-img(src="img/author/erin.jpg"  alt="author")
                        .tape
                            img(src="img/author/tape.png"  alt="author")
    .continue
        .button
            .txt-svg
                span Continue
                Arrow.svg
</template>

<script>
import Arrow from '@/assets/svg/inline/arrow.svg?inline';
export default {
    components:{ Arrow }
}
</script>

<style lang="less">
.writer-letter{
    background-color: @bg-color;
    padding: 22px 0;
    .article{
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.2;
        font-size: 16px;
        font-weight: 400;
        color: @color;
        margin: 0 auto;
        max-width: 601px;
        @media (max-width: 650px) {
            margin: 0 20px;
        }
        .header{
            min-height: 103px;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 0 30px;
            margin-left: -13px;
            text-align: center;
            .h1{
                font-family: 'Proxima-nova', sans-serif;
                font-size: 26px;
                line-height: 1.2;
                font-weight: 700;
                text-transform: uppercase;
                margin: 30px 50px;
            }
        }
        .section{
            background-color: #fff7e0;
            border-radius: 16px;
            .content{
                position: relative;
                margin-left: 29px;
                border-left: red 1px solid;
                padding: 21px 28px 134px;
                @media (max-width: 450px) {
                    padding-bottom: 300px;
                }
                .p{margin: 20px 0;}
                .signature-author{
                    min-height: 195px;
                    width: 90%;
                    position: absolute;
                    bottom: -35px;
                    display: flex;
                    justify-content: space-between;
                    //background-color: aqua;
                    @media (max-width: 450px) {
                        height: 350px;
                    }
                    .signature{
                        width: 196px;
                        height: 97px;
                        @media (max-width: 650px) {
                            width: 100px;
                        }
                        .img{
                            object-fit: contain;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .author{
                        position: relative;
                        .frame{
                            position: absolute;
                            z-index: 1;
                            bottom: 0;
                            right: 16px;
                            width: 204px;
                            height: 204px;
                            border: @bg-color 10px solid;
                            transform: rotate(4deg);
                            filter: drop-shadow( 0 0 8px #88888838);
                            .main-img{
                                object-fit: cover;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .tape{
                            position: absolute;
                            z-index: 2;
                            bottom: 210px;
                            right: 70px;
                            width: 70px;
                            height: 36px;
                        }
                    }
                }
            }
        }
    }
    .continue{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 240px;
        .button{
            .button();
            .txt-svg{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 20px;
                .svg{
                    height: 23px;
                    width: 23px;
                    margin: -4px 0 0 25px;
                }
            }
        }
    }
}
</style>