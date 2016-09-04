#Microsoft Bot Framework

最近line botのトライアル開始やFacebook Messengerがボットの開発を発表
chatbotが流行りつつある。

モールとして考えると会話の中から
商品を勧めたりするマーケティングオートメーションへの活用や
欲しいものをチャットに入力するだけで購入できるような仕組みの導入など
chatbotで期待できる今後の可能性はでかい。

参考:
http://blog.minato.jp.net/entry/linebot

今回はすでに公開されているMicrosoftの
「Microsoft Bot Framework」を使って簡単なDEMOを作ってみた。

https://mywebbot.herokuapp.com/

手順
1.Microsoft Bot Framework登録
2.デプロイ環境作成
3.bot作成
4.Direct Line API でカスタマイズ

## 1.Microsoft Bot Framework登録
登録は無料。以下から登録
https://dev.botframework.com/

## 2.デプロイ環境作成
npmで「botbuilder」と「restify」をインストール
app.jsでデプロイ
環境はherokuを使用（windowsだと Microsoft Azureを使ってローカルでも使用出来るらしい）

参考:
http://dorapon2000.hatenablog.com/entry/2016/09/04/031821
https://azure.microsoft.com/ja-jp/

## 3.bot作成
アプリケーションID発行、デプロイ環境への紐付け
https://bita.jp/dml/msframework_webchat

## 4.Direct Line API でカスタマイズ
準備中

参考:
https://bita.jp/dml/directlineapi_jquery_bot
