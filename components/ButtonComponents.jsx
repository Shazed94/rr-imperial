"use client";
import { Button, Collapse, Input } from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import { BACKEND_BASE_URL } from "./GlobalVariables";
import { useEffect, useRef, useState } from "react";

export function DashboardLinkButton({ link }) {
  return (
    <Link
      href={link}
      className="px-4 py-3 rounded-lg hover:scale-105 transition-all bg-cyan-700 text-white w-[92px]"
    >
      View All
    </Link>
  );
}

export function SearchBoxButton() {
  // =============== Search Product ====================
  const categoryRef = useRef();
  const [open, setOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const [search_string, setSearch_string] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [category, setCategory] = useState([]);
  const [category_id, setCategoryId] = useState();

  const renderAllCategories = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}/api/products-categories`)
      .then((res) => {
        setCategory(res.data.categories);
      });
  };

  useEffect(() => {
    renderAllCategories();
  }, []);

  const getResult = () => {
    // e.preventDefault();
    setOpen(true);
    setIsLoading(true);
    setCategoryId(categoryRef.current.value);
    axios
      .post(`${BACKEND_BASE_URL}/api/search`, { search_string, category_id })
      .then((res) => {
        // if (res.data.search_result.length != 0) {
        setSearchProduct(res.data.search_result);
        // }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (search_string == "") {
      setOpen(false);
      setSearchProduct([]);
    }
  }, [search_string]);
  return (
    <form onSubmit={getResult}>
      <div className="relative w-full">
        <Input
          type="text"
          className="ps-44 lg:ps-56 py-6 rounded-2xl !bg-[#F2F5F6]  placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
          labelProps={{
            className: "hidden",
          }}
          placeholder="Inpur Search Keywords Here"
          onChange={(e) => {
            setSearch_string(e.target.value), getResult();
          }}
          value={search_string}
          required
        />
        <div className="absolute top-[6px] flex w-56 flex-col gap-6">
          <select
            size="md"
            className=" border-none outline-0 bg-transparent focus:ring-0 focus:border-none"
            ref={categoryRef}
          >
            <option value="">Select Category</option>
            {category?.map((categoryInfo) => (
              <option key={categoryInfo.id} value={categoryInfo.id}>
                {categoryInfo?.category_name}
              </option>
            ))}
          </select>
        </div>
        <Collapse open={open} className="overflow-auto max-h-56">
          <div
            id="example-collapse-text"
            className="rounded-lg mt-3 overflow-y-auto bg-gray-100 shadow-lg"
          >
            {isLoading && (
              <div className="spinner-border text-danger m-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {!isLoading &&
              searchProduct?.length > 0 &&
              searchProduct?.map((data, i) => (
                <Link key={i} href={`/product/details/${data.slug}`}>
                  <div key={i} className=" flex p-3 text-dark">
                    <div className="w-20 h-auto object-cover">
                      <img
                        src={`${BACKEND_BASE_URL}/${data.image}`}
                        alt={data.name}
                        className="w-full h-full"
                      />
                    </div>
                    <p className="ms-2 p-0 mb-2">{data.name}</p>
                  </div>
                </Link>
              ))}
            {!isLoading && searchProduct?.length == 0 && (
              <p className="p-3">No Product Found</p>
            )}
          </div>
        </Collapse>
        {/* <Button
          size="md"
          color="gray"
          className="!absolute left-1 top-1 h-[42px] px-3 shadow-none bg-white text-[#6D6E71] rounded-s-lg"
          // containerProps={{
          //   className: "w-20",
          // }}
        >
          Select Category{" "}
          <MdOutlineArrowDropDown className="inline ms-3" size={20} />
        </Button> */}
      </div>
    </form>
  );
}

export function LoadMoreNewsButton({ allNews }) {
  // ================== Load More ========================
  const loadMoreNews = () => {
    if (currentPageNum != lastPageNumber) {
      var pageNum = currentPageNum + 1;
    }
    axios
      .get(`${BACKEND_BASE_URL}/api/all-medias?page=${pageNum}`)
      .then((res) => {
        setPaginateNews([...allNews, ...res.data?.allNews?.data]);
        setCurrentPageNum(pageNum);
      });
  };
  return (
    currentPageNum != lastPageNumber && (
      <div className="text-center">
        <Button variant="outlined" size="lg" onClick={() => loadMoreNews()}>
          Load More
        </Button>
      </div>
    )
  );
}
