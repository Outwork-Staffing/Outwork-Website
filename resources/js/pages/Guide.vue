<script setup>
import VAGuideContent from '../../md/VAGuideContent.md';
</script>
<template>
    <Main>
        <Row background="white" header="true">
            <div class="mx-auto">
                <Heading size="2xl" class="text-center text-heading">The Ultimate Guide to Virtual Assistants</Heading>
                <Heading size="span" class="mx-auto text-center max-w-md md:max-w-7xl"
                    style="text-transform: none !important;">We’ll
                    help you find elite talent overseas—so you

                    can grow your business faster and sustainably.

                </Heading>

                <article class="my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg">
                    <VAGuideContent />
                </article>
            </div>
        </Row>
        <CTA />
    </Main>
</template>

