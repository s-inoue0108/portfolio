<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

// Mailファサード
use Illuminate\Support\Facades\Mail;

// Mail/ContactMail
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // 送信データ
        $post = $request->validate([
            'name' => 'required|max:20',
            'email' => 'required|email:filter,dns',
            'content' => 'required|max:400',
        ]);

        // データをDBに保存
        $contact = new Contact();
        $contact->name = $post['name'];
        $contact->email = $post['email'];
        $contact->content = $post['content'];
        $contact->save();

        // 入力されたメールアドレスへメールを送信
        Mail::to($post['email'])->send(new ContactMail);

        // JSONをリターン
        $json = [
            'name' => $post['name'],
            'email' => $post['email'],
            'content' => $post['content'],
        ];

        return response()->json($json);
    }

    public function notice(Request $request, $noticeId)
    {

    }
}
