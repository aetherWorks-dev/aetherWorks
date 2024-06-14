import dataclasses
import os.path
import paths
import stickies
import typing


@dataclasses.dataclass
class Disk:
    name: str
    stickies_path: typing.List[str] = dataclasses.field(
        default_factory=lambda:
        ["System Folder", "Preferences", "Stickies file"])
    stickies_encoding: str = "mac_roman"
    welcome_sticky_override: stickies.Sticky = None
    # NULL byte does not work in TechText when run on older versions, but a
    # non-breaking space does, so we allow it to be overridden per-disk.
    sticky_placeholder_overwrite_byte: bytes = b'\x00'
    compressed: bool = False

    def path(self) -> str:
        name = self.name
        if self.compressed:
            name += ".zip"
        return os.path.join(paths.IMAGES_DIR, name)


SYSTEM_10_ORIGINAL = Disk(name="System 1.0 (Original).dsk")

SYSTEM_10 = Disk(
    name="System 1.0.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_11 = Disk(
    name="System 1.1.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_20 = Disk(
    name="System 2.0.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_21 = Disk(
    name="System 2.1.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_30 = Disk(
    name="System 3.0.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_32 = Disk(
    name="System 3.2.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_33 = Disk(
    name="System 3.3.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_40 = Disk(
    name="System 4.0.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_41 = Disk(
    name="System 4.1.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_50 = Disk(
    name="System 5.0 HD.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_51 = Disk(
    name="System 5.1 HD.dsk",
    sticky_placeholder_overwrite_byte=b'\xca',
)

SYSTEM_60 = Disk(name="System 6.0 HD.dsk")

SYSTEM_602 = Disk(name="System 6.0.2 HD.dsk")

SYSTEM_603 = Disk(name="System 6.0.3 HD.dsk")

SYSTEM_604 = Disk(name="System 6.0.4 HD.dsk")

SYSTEM_605 = Disk(name="System 6.0.5 HD.dsk")

SYSTEM_607 = Disk(name="System 6.0.7 HD.dsk")

SYSTEM_608 = Disk(name="System 6.0.8 HD.dsk")

SYSTEM_70 = Disk(name="System 7.0 HD.dsk")

SYSTEM_71 = Disk(name="System 7.1 HD.dsk")

SYSTEM_711 = Disk(name="System 7.1.1 HD.dsk")

SYSTEM_712 = Disk(name="System 7.1.2 HD.dsk")

SYSTEM_712_DISK_TOOLS = Disk(name="System 7.1.2 Disk Tools FD.dsk")

SYSTEM_75 = Disk(name="System 7.5 HD.dsk")

SYSTEM_75_DISK_TOOLS = Disk(name="System 7.5 Disk Tools FD.dsk")

SYSTEM_751 = Disk(name="System 7.5.1 HD.dsk")

SYSTEM_752 = Disk(name="System 7.5.2 HD.dsk")

SYSTEM_753 = Disk(name="System 7.5.3 HD.dsk")

SYSTEM_753_PPC = Disk(name="System 7.5.3 (PPC) HD.dsk")

SYSTEM_755 = Disk(name="System 7.5.5 HD.dsk")

MAC_OS_76 = Disk(name="Mac OS 7.6 HD.dsk")

MAC_OS_8 = Disk(name="Mac OS 8.0 HD.dsk")

MAC_OS_81 = Disk(name="Mac OS 8.1 HD.dsk")

MAC_OS_81_DISK_TOOLS_68K = Disk(name="Mac OS 8.1 Disk Tools 68K FD.dsk")

MAC_OS_81_DISK_TOOLS_PPC = Disk(name="Mac OS 8.1 Disk Tools PPC FD.dsk")

MAC_OS_85 = Disk(name="Mac OS 8.5 HD.dsk")

MAC_OS_86 = Disk(name="Mac OS 8.6 HD.dsk")

MAC_OS_9 = Disk(name="Mac OS 9.0 HD.dsk")

MAC_OS_904 = Disk(name="Mac OS 9.0.4 HD.dsk")

MAC_OS_91 = Disk(name="Mac OS 9.1 HD.dsk")

MAC_OS_922 = Disk(name="Mac OS 9.2.2 HD.dsk")

AETHERWORKSDISK = Disk(name="aetherWorks.hda")

JAPANESE_WELCOME_STICKY = stickies.Sticky(
    top=56,
    left=454,
    bottom=114,
    right=640,
    font=stickies.Font.OSAKA,
    size=18,
    style={stickies.Style.BOLD},
    text="Infinite Macintosh へようこそ！",
)

KANJITALK_753 = Disk(
    name="KanjiTalk 7.5.3 HD.dsk",
    # Generate Mojibake of Shift-JIS interpreted as MacRoman, the machfs
    # library always assumes the latter.
    stickies_path=[
        p.encode("shift_jis").decode("mac_roman") for p in [
            "システムフォルダ",
            "初期設定",
            'スティッキーズファイル',
        ]
    ],
    stickies_encoding="shift_jis",
    welcome_sticky_override=JAPANESE_WELCOME_STICKY,
)

NEXTSTEP_08 = Disk(
    name="NeXTStep 0.8 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_09 = Disk(
    name="NeXTStep 0.9 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_10 = Disk(
    name="NeXTStep 1.0 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_10a = Disk(
    name="NeXTStep 1.0a HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_20 = Disk(
    name="NeXTStep 2.0 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_21 = Disk(
    name="NeXTStep 2.1 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_22 = Disk(
    name="NeXTStep 2.2 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_30 = Disk(
    name="NeXTSTEP 3.0 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_31 = Disk(
    name="NeXTSTEP 3.1 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_32 = Disk(
    name="NeXTSTEP 3.2 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_33 = Disk(
    name="NeXTSTEP 3.3 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

NEXTSTEP_40 = Disk(
    name="NeXTSTEP 4.0 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

OPENSTEP_40 = Disk(
    name="OPENSTEP 4.0 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

OPENSTEP_42 = Disk(
    name="OPENSTEP 4.2 HD.dsk",
    compressed=True,
    stickies_encoding="nextstep",
)

ALL_DISKS = [
    MAC_OS_76
]
