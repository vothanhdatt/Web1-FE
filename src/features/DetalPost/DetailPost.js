import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import PropTypes from "prop-types";

DetailPost.propTypes = {};

function DetailPost(props) {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto">
        <div className="mt-14 ">
          <div className="px-2 font-sans font-bold text-4xl h3">
            Thấy mọi người đang quan tâm về kiến ba khoang, em xin chia sẽ bài
            viết của Thầy Lê Văn Vàng,...
          </div>
          <div className="flex pl-2 my-10">
            <div className="w-16 h-16 ">
              <img
                className="w-16 border-2 border-blue-500 rounded-full h-16"
                src="https://via.placeholder.com/60"
              />
            </div>
            <div className="pl-2 mb-1 whitespace-normal text-sm  ">
              <Link className="pr-2 font-bold text-blue-600 text-xl">
                Tran Van Lap
              </Link>
              <i
                className="text-blue-600 fa fa-check-circle fa-2x"
                aria-hidden="true"
              ></i>
              <p className="pt-1 text-base">một ngày - Bình luận: 24</p>
            </div>
          </div>
          <div className="px-2">
            <img
              className="mx-auto my-10 rounded-xl"
              src="https://via.placeholder.com/680x450"
            />
          </div>
          <div className="px-2">
            <div className="text-base text-justify sm:text-lg md:text-xl lg:text-lg xl:text-xl content">
              <div className="px-2">
                <div className="text-base text-justify sm:text-lg md:text-xl lg:text-lg xl:text-xl content">
                  Kiến ba khoang đuôi nhọn Khoảng cuối năm 2007, một số bạn sinh
                  viên ở ký túc xá (khu cũ) của Trường Đại học Cần Thơ thông báo
                  bị hiện tượng phồng rộp da do côn trùng cắn. Tôi và anh Nhâm
                  (hiện công tác ở Công Ty VFC) đã vào ký túc xá xem mẫu côn
                  trùng do các bạn sinh viên bắt được và ghi nhận là kiến ba
                  khoang đuôi nhọn. Sau đó, nhiều thông tin trên trên báo đài
                  ghi nhận sự gây hại trên người của đối tượng này. Kiến ba
                  khoang đuôi nhọn có tên khoa học là Paederus fuscipes Curtis
                  thuộc họ cánh cụt (Stalphylinidae) của bộ côn trùng cánh cứng
                  (Coleoptera). Con trưởng thành có dạng giống kiến thân thon
                  dài, nhọn ở cuối bụng, màu sắc nổi bật với ba khoang màu đen
                  (ở đầu, cánh trước và cuối bụng) và hai khoang màu vàng cam (ở
                  ngực trước và bụng), do đó có tên là kiến ba khoang đuôi nhọn
                  (Hình 1A). Kiến ba khoang đuôi nhọn Khoảng cuối năm 2007, một
                  số bạn sinh viên ở ký túc xá (khu cũ) của Trường Đại học Cần
                  Thơ thông báo bị hiện tượng phồng rộp da do côn trùng cắn. Tôi
                  và anh Nhâm (hiện công tác ở Công Ty VFC) đã vào ký túc xá xem
                  mẫu côn trùng do các bạn sinh viên bắt được và ghi nhận là
                  kiến ba khoang đuôi nhọn. Sau đó, nhiều thông tin trên trên
                  báo đài ghi nhận sự gây hại trên người của đối tượng này. Kiến
                  ba khoang đuôi nhọn có tên khoa học là Paederus fuscipes
                  Curtis thuộc họ cánh cụt (Stalphylinidae) của bộ côn trùng
                  cánh cứng (Coleoptera). Con trưởng thành có dạng giống kiến
                  thân thon dài, nhọn ở cuối bụng, màu sắc nổi bật với ba khoang
                  màu đen (ở đầu, cánh trước và cuối bụng) và hai khoang màu
                  vàng cam (ở ngực trước và bụng), do đó có tên là kiến ba
                  khoang đuôi nhọn (Hình 1A). Kiến ba khoang đuôi nhọn Khoảng
                  cuối năm 2007, một số bạn sinh viên ở ký túc xá (khu cũ) của
                  Trường Đại học Cần Thơ thông báo bị hiện tượng phồng rộp da do
                  côn trùng cắn. Tôi và anh Nhâm (hiện công tác ở Công Ty VFC)
                  đã vào ký túc xá xem mẫu côn trùng do các bạn sinh viên bắt
                  được và ghi nhận là kiến ba khoang đuôi nhọn. Sau đó, nhiều
                  thông tin trên trên báo đài ghi nhận sự gây hại trên người của
                  đối tượng này. Kiến ba khoang đuôi nhọn có tên khoa học là
                  Paederus fuscipes Curtis thuộc họ cánh cụt (Stalphylinidae)
                  của bộ côn trùng cánh cứng (Coleoptera). Con trưởng thành có
                  dạng giống kiến thân thon dài, nhọn ở cuối bụng, màu sắc nổi
                  bật với ba khoang màu đen (ở đầu, cánh trước và cuối bụng) và
                  hai khoang màu vàng cam (ở ngực trước và bụng), do đó có tên
                  là kiến ba khoang đuôi nhọn (Hình 1A).
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-2 my-10">
          <div className="w-12 h-12">
            <img
              className="rounded-full"
              src="https://via.placeholder.com/60"
            />
          </div>

          <div className="flex flex-col justify-center w-full ml-4 ">
            <div className="w-full pb-3 sm:mx-auto">
              <div className="flex flex-col bg-white shadow-lg min-w-1xl rounded-xl">
                <form>
                  <div className="flex flex-col items-center bg-gray-200 rounded-xl">
                    <div className="flex py-3 items-center">
                      <div className="w-16 h-16">
                        <img
                          className="w-16 h-16 border-2 border-indigo-500 rounded-full"
                          src="https://via.placeholder.com/60"
                        />
                      </div>
                      <div className="text-xs whitespace-normal pl-3">
                        <Link className="font-bold text-indigo-500">
                          <p className="text-indigo-500 text-lg">
                            Bạn cảm thấy như thế nào ?
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <textarea
                        rows="3"
                        placeholder="Viết bình luận nào bạn ơi..."
                        className="p-1 text-gray-500 outline-none resize-none sm:p-3 md:p-4 lg:p-5 rounded-xl text"
                      ></textarea>
                      <button
                        type="submit"
                        className="items-end py-1 mt-2 text-lg text-white sm:mt-3 lg:mt-4 xl:mt-5 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl"
                      >
                        Đánh giá
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-2 mt-5 font-sans font-bold text-center text-xl">
          <h1>
            Đăng Nhập Để Đánh Giá
            <Link className="text-blue-500 hover:text-red-600"> Đăng Nhập</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
