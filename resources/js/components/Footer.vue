<template>
    <footer class="footer footer-center bg-navy-blue text-white p-4">
        <div>
            <p>Copyright &copy; <span v-text="year"></span> Shota Inoue</p>
        </div> 
    </footer>
</template>

<script setup>
    const date = new Date(); 
    const year = date.getFullYear();
</script>