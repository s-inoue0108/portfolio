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
            'name' => 'required|max:40',
            'email' => 'required|email:filter,dns',
            'title' => 'required|max:40',
            'content' => 'required|max:1000',
        ]);

        // データをDBに保存
        $contact = new Contact();
        $contact->name = $post['name'];
        $contact->email = $post['email'];
        $contact->title = $post['title'];
        $contact->content = $post['content'];
        $contact->save();

        // 入力されたメールアドレスへメールを送信
        Mail::to($post['email'])->send(new ContactMail);

        // JSONをリターン
        $json = [
            'name' => $post['name'],
            'email' => $post['email'],
            'title' => $post['title'],
            'content' => $post['content'],
        ];

        return response()->json($json);
    }
}
