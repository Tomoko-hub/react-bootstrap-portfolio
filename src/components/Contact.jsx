import React from "react";
import { motion } from "framer-motion";
import BlackBoxTransition from "../utils/BlackBoxTransition";

const Contact = () => {
  return (
    <BlackBoxTransition>
      <motion.div 
        className="container"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition= {{ duration: 0.5, delay: 0.5 }}
        exit={{ opacity:0 }}
      >
        <form>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              I'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Your name</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your message</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="mt-5">
          こんにちは。
          日本語はネイティブ、英語よりはフィンランド語の方が得意です。
          人と話すのが好きで、リモートワークよりもオフィスに行って仕事をするのが好きだと気付きました。
          転職しようと思ったきっかけは、個人事業主としてヘルシンキで旅行業をしていたときに、コロナ禍に見舞われた事。
          これから会社をすこしずつ大きくして、新しく人も雇おうかと思っていたのですが、これからは働き方が変わるような気がして思い切りました。
          元々、旅行アプリを作ってみる事に興味があったので、これを機に勉強しようと思ったのです。
          こうやって書いていて気付きましたが、学生時代はジャーナリストになりたくて勉強していたので、書く事が好きです。
          年齢のせいもあるのか、なかなか転職活動はうまくいきませんが、のんびりやっていきたいと思います。
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo ea
          officiis natus error nesciunt, eos veritatis, deleniti inventore
          corrupti dolorem deserunt, pariatur quo sint ab. Velit aperiam dolor
          obcaecati doloremque illum cum, recusandae nihil itaque repudiandae
          atque eaque nulla aliquam sit ratione corrupti dolorum unde harum.
          Veritatis animi atque quam, deserunt numquam totam explicabo
          exercitationem possimus hic magni inventore, autem voluptas vero quasi,
          eos neque ab sequi sint sed illo est? Voluptas, doloribus? Provident nam
          quam optio? Excepturi fugiat facilis dolorum quas unde? Adipisci nisi
          maiores sequi beatae, excepturi, incidunt aliquid molestiae, accusantium
          perferendis quibusdam omnis cumque suscipit. Earum.
        </p>
      </motion.div>
    </BlackBoxTransition>
  );
};

export default Contact;