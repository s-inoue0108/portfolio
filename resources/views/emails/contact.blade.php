<x-mail::message>

<x-mail::button :url="env('APP_URL')">
サイトを開く（S.I's Portfolio）
</x-mail::button>

# お問い合わせを受け付けました

{{ $name }}様：
以下の内容でお問い合わせを受け付けました．

<x-mail::panel>
{{ $content }}
</x-mail::panel>

本件に関する返信は，{{ env('MAIL_FROM_ADDRESS') }}よりお送りいたします．返信をお待ちください．<br><br>
Shota Inoue
</x-mail::message>
