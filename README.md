# How to use it

- Convert the magnet to base64 (e.g, `Buffer.from(magnet).toString('base64')`
- In your Telegram bot send method options, choose HTML formatting
- Create the link like the following:
    ```html
    <a href=`https://magnet.flacial.dev/api/link/${magnetBase64}`>Some text</a>
    ```
- Send it to your bot (e.g., `bot.send(-0000000, magnetLink), { format: 'HTML' }`)

*Note: methods for creating the base64 or sending the message may vary depeding on your programming language and Telegram bot API wrapper*
