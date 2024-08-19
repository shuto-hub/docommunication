## about

<p align="center">
  <img width=400 src="https://github.com/user-attachments/assets/48248f66-ff6b-4c71-8342-7e7b18396ef1">
</p>

liveblocks + lexical + yjs を利用したコラボレーションエディタです。

demo:
https://docommunication.xyz/

## Getting Started

1. ローカルで実行する場合、 https://liveblocks.io/ でアカウントを作成し、apiキーを作成してください

2. voltaで実行環境を管理しているため、voltaのインストールを推奨しています

```bash
curl https://get.volta.sh | bash
```

(もしくはnodeとyarnを以下のバージョンに合わせてください)

```
"node": "22.6.0"
"yarn": "4.4.0"
```

3. 環境編集でホスト名を取得している箇所があるため、ルートディレクトリに`.env.local`を作成し、`.env.example`の内容をコピーしてください

4. 手順1 で作成したapiキーをLIVEBLOCKS_API_KEYとして`.env.local`に追記してください

5. 以下コマンドにより http://localhost:3000 にてローカル環境が起動できます

```bash
yarn install
yarn run dev
```
