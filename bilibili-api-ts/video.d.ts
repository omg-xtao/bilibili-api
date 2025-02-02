import { Credential } from "./models/Credential";
/**
 * 视频相关
 */
export declare class Video {
    __info: Record<any, any> | null;
    __bvid: string;
    __aid: number;
    credential: Credential;
    /**
     * param bvid(int)              Bvid(可选)
     *
     * param aid(int)               Aid(可选)
     *
     * param credential(Credential) 凭据类(可选)
     */
    constructor({ bvid, aid, credential }: {
        bvid?: string | null;
        aid?: number | null;
        credential?: Credential;
    });
    /**
     * 设置 bvid
     *
     * param bvid(string) Bvid
     */
    set_bvid({ bvid }: {
        bvid: string;
    }): void;
    /**
     * 获取 bvid
     *
     * @returns Bvid
     */
    get_bvid({}: {}): string;
    /**
     * 设置 aid
     *
     * param aid(number) Aid
     */
    set_aid({ aid }: {
        aid: number;
    }): void;
    /**
     * 获取 aid
     *
     * @returns aid
     */
    get_aid({}: {}): number;
    /**
     * 获取视频详细信息
     *
     * @returns 调用 API 返回的结果
     */
    get_info({}: {}): Promise<any>;
    /**
     * 获取视频详细信息的内存中的缓存数据
     *
     * @returns 调用 API 返回的结果
     */
    __get_info_cached({}: {}): Promise<any>;
    /**
     * 获取视频统计数据
     *
     * @returns 调用 API 返回的结果
     */
    get_stat({}: {}): Promise<any>;
    /**
     * 获取视频标签
     *
     * @returns 调用 API 返回的结果
     */
    get_tags({}: {}): Promise<any>;
    /**
     * 获取视频充电信息
     *
     * @returns 调用 API 返回的结果
     */
    get_chargers(): Promise<any>;
    /**
     * 获取视频分 P 信息
     *
     * @returns 调用 API 返回的结果
     */
    get_pages({}: {}): Promise<any>;
    /**
     * 获取分 P 对应的 cid
     *
     * param page_index(int) 分 P 序号
     *
     * @returns number: cid
     */
    __get_page_id_by_index(page_index: number): Promise<any>;
    /**
     * 获取分 P 对应的 cid
     *
     * param page_index(number) 分 P 序号
     *
     * @returns number: cid
     */
    get_cid({ page_index }: {
        page_index?: number;
    }): Promise<any>;
    /**
     * 获取视频播放流（下载地址）
     *
     * param page_index(number) 分 P 序号(可选)
     *
     * param cid(number)        分 P 编号(可选)
     *
     * param html5(boolean)     是否以 html5 端获取（这样子可以直接在网页中显示，但是视频源单一）(可选)
     *
     * page_index 和 cid 请务必提供一个。
     *
     * @returns 调用 API 返回的结果
     */
    get_download_url({ page_index, cid, html5 }: {
        page_index?: number | null;
        cid?: number | null;
        html5?: boolean;
    }): Promise<any>;
    /**
     * 获取相关视频信息
     *
     * @returns {Object} 调用 API 返回的结果
     */
    get_related({}: {}): Promise<any>;
    /**
     * 视频是否点赞过
     *
     * @returns {bool} 视频是否点赞过
     */
    has_liked({}: {}): Promise<boolean>;
    /**
     * 获取视频已投币数量
     *
     * @returns {number} 视频已投币数量
     */
    get_pay_coins({}: {}): Promise<any>;
    /**
     * 是否已收藏
     *
     * @returns {bool} 视频是否已收藏
     */
    has_favoured({}: {}): Promise<any>;
    /**
     * 获取收藏夹列表信息，用于收藏操作，含各收藏夹对该视频的收藏状态。
     *
     * @returns {Object} 调用 API 返回的结果
     */
    get_media_list({}: {}): Promise<any>;
    /**
     * 获取高能进度条
     *
     * param page_index(number) 分 P 序号(可选)
     *
     * param cid(number)        分 P 编号(可选)
     *
     * @returns {Object} 调用 API 返回的结果
     */
    get_pbp({ page_index, cid }: {
        page_index?: number | null;
        cid?: number | null;
    }): Promise<any>;
    /**
     * 点赞视频。
     *
     * param status (bool, optional): 点赞状态。Defaults to True.
     *
     * @returns {null} 调用 API 返回的结果。
     */
    like({ status }: {
        status: boolean;
    }): Promise<any>;
    /**
     * 投币
     *
     * param num(number)  : 投币数量，1 ~ 2, default to 1
     *
     * param like(boolean): 是否同时点赞，default to false
     *
     * @returns {null} 调用 API 返回的结果。
     */
    pay_coin({ num, like }: {
        num: number;
        like: boolean;
    }): Promise<any>;
}
