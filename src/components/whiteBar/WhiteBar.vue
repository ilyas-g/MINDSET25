<template lang="">
    <div className="horiz-rule horiz-rule-1 ">
        <div className="bar"></div>
    </div>
</template>

<style lang="scss">
.horiz-rule {
    display: block;
    margin: -12px 0;
    position: relative;
    // height: 24px;
    z-index: 1;
}

.horiz-rule .bar {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    height: 2px;
    background-color: #faf4ea;
}

@media (min-width: 768px) {
    .horiz-rule .bar {
        height: 4px;
    }
}

</style>
